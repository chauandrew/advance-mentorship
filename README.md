# Advance Mentorship Program Website

## Getting Started

We use React for our frontend (organized in `/client`) and node for our backend (organized in `/server`). We use Google Sheets as a DB so that non-technical people can update it and use Google Firebase for image hosting. We're hosting the site on Heroku, which is currently set to automatically deploy when we push to master. 

To get started, you'll need to clone the repository and `npm install` packages from `/` and `/client`. 

- To run the backend, run `npm run dev` from `/`. This will launch on `http://localhost:4000`
- To run the frontend, run `npm start` from `/client`. This will launch on `http://localhost:3000`

Another note: it's currently set up so that running the frontend on your local machine will query the live site. If you want to develop full-stack locally, update the `prefix` variable under `/client/src/utils/api.js` to point to `http://localhost:4000`. Then, you can run both the frontend and backend servers simultaneously. 

Also, ping me (Andrew) if you want to develop the backend, and I can send you the environment variables I'm using.

