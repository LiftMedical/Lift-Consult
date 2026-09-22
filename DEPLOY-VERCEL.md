# Put LIFT Consult on your iPad

Use a **new project** for LIFT Consult. Keep your working LFAS project as it is.

## 1. Upload to GitHub

1. Extract LIFT-Consult.zip.
2. Create a new GitHub repository, for example `LIFT-Consult`.
3. Choose Add file → Upload files.
4. Open the extracted `lift-consult` folder and upload its **contents**. At the repository's top level you should see `public`, `package.json`, and `vercel.json`.
5. Commit the files.

Do not upload the ZIP itself. If you upload the whole folder instead of its contents, use `lift-consult` as the Root Directory in the next step.

## 2. Import into Vercel

1. In Vercel, choose Add New → Project.
2. Import your new LIFT-Consult repository.
3. Use Framework Preset **Other**.
4. Root Directory: leave at the repository root if `vercel.json` is there. Otherwise select the exact folder containing `vercel.json` and `public`.
5. Output Directory: **public**. Build and install commands should be empty. The included `vercel.json` provides these settings.
6. Deploy, wait for Ready, and choose Visit.

If you see 404, check the Root Directory and confirm `public/index.html` exists inside it. Do not change your LFAS settings.

## 3. Optional LIFT address

In the new project's Domains settings, add `consult.liftmedicalesthetics.com`. At your DNS provider, add the exact DNS record Vercel displays. Keep existing website and LFAS records unchanged. Wait until Vercel confirms the domain configuration and HTTPS certificate.

## 4. Save on the iPad

1. Open the deployed HTTPS address in Safari.
2. Wait for **Available offline** at the bottom of the library.
3. Share → Add to Home Screen → name it **LIFT Consult**.
4. Open a few stories, test swiping, star favorites, and enlarge a reference sheet.
5. Close and reopen with airplane mode on to verify offline availability on your device.

To update later, replace the files in this new repository and commit. Vercel's Git connection deploys changes. Increment the offline-cache version for each release; close and reopen all Consult windows after the update has downloaded.

This package is ready to deploy. No GitHub repository, DNS record, or live Vercel project was changed by creating it.

Official references: [Vercel build configuration](https://vercel.com/docs/builds/configure-a-build) · [Custom domains](https://vercel.com/docs/domains/set-up-custom-domain).
