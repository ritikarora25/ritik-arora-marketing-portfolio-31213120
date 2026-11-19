# Clean up and recheck the site

## Remove
- Marketing research, plan and GitHub draft in Files (marketing folder), plus the memory note pointing to them.
- Article research notes and all finished plans in the project's notes folder.
- Unused files: placeholder image and the three old Poppins .ttf fonts (the site loads only the .woff2 versions).
- Any unused code found with a dead-code scan (unused exports, imports, packages), only where nothing references it.

## Keep
- All pages, articles, sources shown on articles, images in use, resume, IndexNow key file, sitemap, robots and llms files.
- The design, intro and tracking, which stay as they are.

## Update
- Remove the project rule about keeping research files, and the task list entries that are already done.

## Check
- Run all tests and confirm the site builds without errors.
- Open the homepage, Thoughts and every article on desktop and mobile. Confirm the pages load, images show, the resume opens and there are no console errors.
- Check that sitemap.xml, robots.txt and llms.txt respond.

## Technical details
- Dead-code scan with `bunx knip` and manual rg checks before each delete.
- Edit AGENTS.md (research rule), roadmap.md, mem index (remove marketing-research reference).
