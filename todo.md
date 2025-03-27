## To-Do: AdvancedMaking Core Setup

### Project Structure
- [ ] Create GitHub repo `advancedmaking`
- [ ] Add `/cheatsheets/` folder
- [ ] Add `cheatsheets.yaml` listing all desired topics
- [ ] Add `index.html` with Tailwind CDN and links to each cheatsheet

### Tailwind Setup
- [ ] Use Tailwind via CDN (`<script src="https://cdn.tailwindcss.com"></script>`)
- [ ] Wrap cheat sheet content in `<article class="prose">`

### GitHub Actions: Automation System
- [ ] Create workflow to read `cheatsheets.yaml`
- [ ] Compare against files in `/cheatsheets/`
- [ ] Identify missing topics
- [ ] Call LLM API to generate missing sheets as HTML
- [ ] Save HTML files and create a new PR for each
- [ ] Auto-deploy `main` branch to GitHub Pages

### Deployment
- [ ] Enable GitHub Pages (root or `/docs`)
- [ ] Configure custom domain `advancedmaking.com`

### (Optional Later)
- [ ] Add LLM confidence metadata to PR description
- [ ] Add RSS feed of new/updated cheat sheets
- [ ] Add search/filter functionality
