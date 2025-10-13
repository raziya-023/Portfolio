const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/github', async (req, res) => {
    try {
        const response = await axios.get('https://api.github.com/users/raziya-023/repos?sort=updated&per_page=6');
        //only fetch the latest 6 repos to keep it clean
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching GitHub repos:', error);
        res.status(500).json({ message: 'Error fetching repositories' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});