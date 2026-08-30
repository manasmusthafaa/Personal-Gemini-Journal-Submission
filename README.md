# Personal Gemini Journal

This project is configured for a Google Cloud Run deployment workflow and uses the project identity:

- Project Name: Personal Gemini Journal
- Project ID: tensile-imprint-507111-j0
- Cloud Run URL: https://tensile-imprint-507111-j0.asia-southeast1.run.app

## Project structure

- `client/` - frontend app
- `server/` - backend API
- `package.json` - workspace scripts

## Getting started

1. Install dependencies:
   npm install
2. Start the frontend:
   npm run dev --workspace client
3. Start the backend:
   npm run dev --workspace server

## Deployment notes

The application is intended to run as a Cloud Run service with the regional URL above for production access.
