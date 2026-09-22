# Shreya Sam Academic Website

A GitHub Pages-ready Jekyll academic website using a custom black, white, and burgundy design based on the structure of the supplied reference site. No personal text, photographs, publication covers, analytics identifiers, or external-profile links from the reference site are included.

## Update the content

- Edit `_data/profile.yml` for the name, role, institution, email, CV path, photograph, and research interests.
- Edit `index.md`, `research.md`, and `case-studies.md` for page content.
- Replace `assets/cv/Shreya_Sam_CV.pdf` whenever the CV changes.
- To add a photograph, place it in `assets/images/`, then set `photo` in `_data/profile.yml`.

## Publish as a personal GitHub Pages site

1. Create a public repository named `YOUR-USERNAME.github.io`.
2. Upload the contents of this folder to the repository root.
3. In `_config.yml`, set `url` to `https://YOUR-USERNAME.github.io` and leave `baseurl` blank.
4. In GitHub, open **Settings → Pages** and select **Deploy from a branch**, using `main` and `/ (root)`.

For a project repository instead, set `baseurl` to `/REPOSITORY-NAME`.

## Preview locally

```bash
bundle install
bundle exec jekyll serve
```

Open `http://127.0.0.1:4000`.

## Privacy check before publishing

The included CV PDF contains a telephone number and residential address. Replace it with a public-facing version if those details should not appear online.
