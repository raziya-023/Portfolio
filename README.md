# Raziya's Personal Portfolio Website

![Raziya's Portfolio](https://github.com/user-attachments/assets/3985ed42-d6f7-4f5d-b726-f89e878afc3a)

A stunning, interactive personal portfolio built from scratch with **React (Vite)**, **Tailwind CSS**, and **Framer Motion**. It features a dynamic, multi-layered parallax background, a seamless light/dark mode, and a build-time script to fetch my latest projects directly from the GitHub API.

## 🚀 **[View The Live Demo](https://raziya-portfolio.vercel.app/)**

---

## ✨ Key Features

-   **Stunning Animated Background**: A multi-layered, parallax starfield created with `react-tsparticles` that provides a beautiful sense of depth.
-   **🌓 Dual Theme**: Seamlessly switch between a cute, pastel light mode and a vibrant, cosmic dark mode. The theme is saved to local storage so your preference is remembered.
-   **📱 Fully Responsive Design**: A mobile-first approach ensures the portfolio looks and works perfectly on all devices, from phones to desktops.
-   **🔮 Glassmorphism UI**: Modern, semi-transparent "glass" cards with gradient effects are used to display projects, adding to the aesthetic.
-   **Dynamic Project Fetching**: A Node.js script runs at build time (`npm run build`) to fetch my latest repositories from the GitHub API. This makes the site incredibly fast as there are no client-side API calls, eliminating cold starts.
-   **Smooth Animations**: Interactive elements and on-scroll reveals are powered by `Framer Motion` to create a fluid and engaging user experience.
-   **Custom Fonts**: Uses "Poppins" for clean body text and the elegant "Pacifico" for cursive headlines to create a unique personality.

---

## 🛠️ Tech Stack

This project was built using a modern and powerful tech stack:

-   **Frontend:** React (with Vite)
-   **Styling:** Tailwind CSS
-   **Animations:** Framer Motion
-   **Particle Effects:** `react-tsparticles`
-   **Build Scripting:** Node.js, Axios
-   **Deployment:** Vercel

---

## ⚙️ Running Locally

Want to run this project on your own machine? Here’s how:

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/raziya-023/Portfolio.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd Portfolio
    ```

3.  **Install root dependencies:**
    *(This installs `axios` and `concurrently` for the build script)*
    ```bash
    npm install
    ```

4.  **Navigate to the frontend folder:**
    ```bash
    cd frontend
    ```

5.  **Install frontend dependencies:**
    ```bash
    npm install
    ```

6.  **Go back to the root directory:**
    ```bash
    cd ..
    ```

7.  **Run the development server:**
    *(This will first fetch your GitHub data and then start the Vite server)*
    ```bash
    npm run dev
    ```
    The app should now be running on `http://localhost:5173`.

---

## 🌐 Deployment

This portfolio is deployed on **Vercel**.

The deployment process is optimized for performance. On every `git push` to the `main` branch, Vercel triggers a new build. The build command (`npm run build`) first executes the `fetch-github.cjs` script to get the latest project data and saves it as a static JSON file. The Vite application is then built, consuming this local JSON file.

This "build-time fetching" strategy results in a completely static, lightning-fast website with no API-related loading delays for the end-user.

---

## 👤 Contact

Feel free to connect with me!

-   **Email:** [luckii0523@gmail.com](mailto:luckii0523@gmail.com)
-   **GitHub:** [@raziya-023](https://github.com/raziya-023)
-   **LinkedIn:** [Raziya Khan](https://linkedin.com/in/raziya-khan-159146281)
