# Portfolio site: setup guide

A five-page static site (Home, About, Projects, Interests, Contact) for GitHub Pages.
No frameworks or build tools: plain HTML, one stylesheet, one small script.

```
portfolio-site/
├── index.html        Home
├── about.html        About me, education, experience, skills
├── projects.html     Projects with filter buttons
├── interests.html    Interests
├── contact.html      Contact details (and an optional form)
├── css/style.css     All styling (colors and fonts are at the top)
├── js/main.js        Mobile menu, project filters, footer year
├── images/           Put headshot.jpg here
└── files/            Put resume.pdf here
```

## 1. Personalize the content

Open the folder in a text editor (VS Code is free and works well). Search all files for
`EDIT` and `YOUR-` to find every placeholder.

- **Email, LinkedIn, GitHub:** they appear in the footer of all five pages and on
  `contact.html`. In VS Code, use Edit > Replace in Files to change all of them at once:
  - `your.email@example.com`
  - `YOUR-PROFILE` (LinkedIn)
  - `YOUR-USERNAME` (GitHub)
- **Photo:** save a portrait-shaped photo as `images/headshot.jpg`. Until you do, the About
  page shows your initials.
- **Resume:** save your resume as `files/resume.pdf`.
- **"Open to roles" line:** on `index.html` there's a commented-out line saying you're open to
  new roles. Uncomment it only if you're comfortable with your current employer seeing it.
- **Location:** `contact.html` says "Southern California". Change or delete that line.

## 2. Preview on your computer

Any of these works:
- Double-click `index.html` to open it in your browser.
- In VS Code, install the "Live Server" extension, then right-click `index.html` > Open with Live Server.
- In a terminal inside the folder, run `python3 -m http.server` and open http://localhost:8000.

## 3. Upload to your GitHub Pages repository

Your site repository is usually named `YOUR-USERNAME.github.io`.

**Option A: in the browser (no Git needed)**
1. Open the repository on github.com.
2. If it contains an `index.md`, delete it (it would compete with `index.html`). If it has a
   `_config.yml` that sets a `theme`, delete that line or the file.
3. Click **Add file > Upload files**.
4. Drag in the *contents* of the `portfolio-site` folder (the files and the `css`, `js`,
   `images`, and `files` folders), not the folder itself. `index.html` must end up at the top
   level of the repository.
5. Write a short message such as "Add portfolio site" and click **Commit changes**.

**Option B: with Git on the command line**
```
git clone https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
cd YOUR-USERNAME.github.io
# copy the contents of portfolio-site/ into this folder, then:
git add .
git commit -m "Add portfolio site"
git push
```

## 4. Check the Pages settings and go live

1. In the repository, go to **Settings > Pages**.
2. Under "Build and deployment", set Source to **Deploy from a branch**, branch **main**,
   folder **/ (root)**, and save.
3. Open the **Actions** tab to watch the deployment. It usually finishes in 1 to 2 minutes.
4. Visit `https://YOUR-USERNAME.github.io`. If you still see the old site, do a hard refresh
   (Ctrl+Shift+R on Windows, Cmd+Shift+R on Mac).

## 5. Make changes later

- **Small edits:** open a file on github.com, click the pencil icon, edit, and commit.
- **Add a project:** in `projects.html`, copy an entire `<li class="project" ...> ... </li>`
  block and edit it. Set `data-tags` to one or more of `ml`, `modeling`, `clinical`, and
  `software` so the filter buttons include it.
- **Link to code or a write-up:** each project has a commented-out links line. Remove the
  `<!--` and `-->` around it and fill in the URLs.
- **Change colors or fonts:** edit the variables at the top of `css/style.css`. Dark-mode
  colors are in the block just below.
- **Add an interest:** copy an `<article class="interest">` block in `interests.html`.

## 6. Before you publish project code

- **Course assignments:** many courses don't allow posting assignment solutions publicly.
  Check each Berkeley course's policy before linking code, or share a write-up instead.
- **UCSF capstone:** get your sponsor's permission before publishing anything, and never
  publish patient data or screenshots that contain it.
- **Johnson & Johnson work:** keep descriptions at the level of your resume. Don't publish
  internal code, data, screenshots, or project code names. The site's J&J descriptions are
  already written at that level.

## Optional extras

- **Contact form:** GitHub Pages can't process forms itself. `contact.html` includes a
  commented-out form that works with Formspree's free plan; instructions are in the comment.
- **Custom domain:** buy a domain, then add it under Settings > Pages > Custom domain and
  follow GitHub's DNS instructions.
