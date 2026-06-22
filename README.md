# Galleri Project

## Project Overview
This project implements a fully automated CI/CD pipeline for a web gallery application.

## Technologies Used
- **CI/CD:** Jenkins & GitHub
- **Hosting:** Render
- **Database:** MongoDB Atlas
- **Framework:** Node.js & Express

## Pipeline Architecture


## Key Technical Solutions
1. **Pipeline Automation:** Jenkins triggers deployments to Render upon every push to GitHub.
2. **Database Security:** Configured MongoDB Atlas IP Whitelist (0.0.0.0/0) to permit access from dynamic Render IP addresses.
3. **Mongoose Integration:** Updated legacy callback-based database queries to modern Promise-based syntax (.then/.catch) to ensure compatibility with recent Mongoose versions.