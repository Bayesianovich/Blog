# My Personal Blog

This is a Hexo blog using a custom theme inspired by [Manjusaka](https://www.manjusaka.blog/).

## Project Setup

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Run Local Server**:
    ```bash
    hexo server
    ```
    Visit `http://localhost:4000` to preview.

3.  **Create New Post**:
    ```bash
    hexo new "My New Post"
    ```
    Edit the file in `source/_posts/My-New-Post.md`.

## Deployment to Vercel

1.  **Push to GitHub**:
    Create a new repository on GitHub and push this code:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    git branch -M main
    git remote add origin <your-github-repo-url>
    git push -u origin main
    ```

2.  **Deploy on Vercel**:
    - Go to [Vercel](https://vercel.com).
    - Click "Add New Project".
    - Import your GitHub repository.
    - Framework Preset should be detected as **Hexo**.
    - Build Command: `hexo generate`
    - Output Directory: `public`
    - Click **Deploy**.

## Theme Features

- **Dark Mode**: Default dark theme.
- **Featured Carousel**: The top widget automatically cycles through posts (random start, changes every 5 seconds).
- **Responsive Layout**: Works on mobile and desktop.
- **Alternating Post List**: Posts in the list alternate layout (Image Left / Image Right).
