# LunaLife 🌙

A royal-purple, celestial, installable life planner PWA. It is responsive for iPad, Android phones/tablets and desktop browsers.

## Included
- Daily dashboard and schedule
- Food journal with optional calorie/macronutrient fields
- Water tracker
- Period/cycle log with estimated next start and a simple calendar
- Mood, sleep, movement and medication/vitamin logs
- Habits, goals, tasks, notes, shopping list and spending log
- JSON export/import backup
- PWA manifest, offline service worker, custom galaxy app icon
- Optional Firebase email/password + Google authentication and Firestore cloud sync

## Run locally
Serve this folder over HTTPS or localhost (ES modules and service workers require a secure context). For example:

```bash
python -m http.server 8000
```

Then open http://localhost:8000. For phone/tablet installation and cloud sync, deploy the folder to an HTTPS host.

## Enable cross-device cloud sync (Firebase)
Cloud sync is optional and is **not active until you configure your own Firebase project**.

1. Create a project at https://console.firebase.google.com/.
2. Add a Web app and copy its Firebase config.
3. In Authentication → Sign-in method, enable **Email/Password** and **Google**.
4. Create a Cloud Firestore database.
5. Replace the placeholder values in `firebase-config.js`, and set `configured: true`.
6. Publish the rules in `firestore.rules` in Firestore → Rules.
7. Deploy this folder to an HTTPS static host (for example Firebase Hosting, Cloudflare Pages, or Netlify).
8. Open the deployed URL on each device and sign in with the same account.

Each account's data is stored under its own authenticated user ID. The provided Firestore rules restrict reads and writes to that signed-in user. Do not loosen these rules. For production use, consider adding conflict resolution, scheduled backups, stronger validation, and a privacy review.

## Install
- **iPad/iPhone:** open the HTTPS site in Safari → Share → Add to Home Screen.
- **Android:** open the HTTPS site in Chrome → Install app / Add to Home screen.
- **Desktop:** use the browser's install icon/menu if offered.

## Important notes
- This is a starter project, not a published App Store / Google Play listing. Native store distribution would require packaging, developer accounts, review, and release steps.
- Local-only entries stay in that browser until exported or cloud sync is configured. They do not magically transfer between devices.
- Cycle predictions are estimates only; this is not contraception, diagnosis, or medical advice.
- Nutrition/calorie fields are optional logging tools, not dietary prescriptions. You can leave them blank.
- Keep your device locked. Cycle, mood and medication entries are sensitive personal information.
