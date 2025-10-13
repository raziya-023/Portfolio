const axios = require('axios');
const fs = require('fs');
const path = require('path');

const GITHUB_USERNAME = 'raziya-023';
const REPO_COUNT = 6;
const GITHUB_API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=${REPO_COUNT}`;

const outputPath = path.resolve(__dirname, '../frontend/public/github-data.json');

async function getGitHubData() {
    try {
        console.log('Fetching latest GitHub repositories...');
        const response = await axios.get(GITHUB_API_URL);

        const projects = response.data.map(repo => ({
            id: repo.id,
            name: repo.name,
            html_url: repo.html_url,
            description: repo.description,
        }));

        fs.writeFileSync(outputPath, JSON.stringify(projects, null, 2));
        console.log(`Successfully saved ${projects.length} repositories to ${outputPath}`);

    } catch (error) {
        console.error('Error fetching GitHub data:', error.message);
        if (!fs.existsSync(outputPath)) {
            fs.writeFileSync(outputPath, JSON.stringify([], null, 2));
        }
    }
}

getGitHubData();