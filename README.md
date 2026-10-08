# Portfolio: Next.js + Local JSON Data
## Setup
1. `npm install`
2. Set `AUTH_SECRET` (`openssl rand -base64 32`), `ADMIN_EMAIL`, and `ADMIN_PASSWORD` in `.env`
3. `npm run dev`, then open http://localhost:3000 (admin: /admin)
## Data storage
The portfolio now uses JSON files in the `data/` folder for projects, skills, experience, education, certifications, settings, and contact messages.
## Admin
Sign in at /admin. Tabs: projects, skills, experience, education, certifications, messages, settings (CV, profile image, social links).
Uploads (JPG, PNG, WebP, PDF, up to 5 MB) are saved to the `uploads/` folder and served at `/uploads/<file>`.
Note: `uploads/` needs a persistent disk. On serverless hosts, files may not persist; switch the upload route to S3/Cloudinary for permanent storage.
