# Full-Stack React Application Template

---

<div align="center">
  <a href="https://react.dev/"><img src="./src/assets/react-logo.png"></a>
</div>

---

## React, Redux, TypeScript, Node/Express, TailwindCSS, Docker, Webpack, PostgresQL, Mongoose

---

---

---

<br />
<br />

## Instructions:

Fork and clone this repository to your local machine.

---

### Dev Mode:

1. ```
   npm install
   npm run both
   ```
   Navigate to `http://localhost:8080` in the browser to view the application.
   <br />
   <strong>NOTE:</strong> Check `package.json` to view the scripts and run your desired command.
   <br />
   <br />
2. Start editing `App.tsx` to see changes!
   <br />
   <br />

### Production Mode:

1. Create the production bundle with :
   ```
   npm run build
   ```
2. Run the production build:
   ```
   npm run start
   ```
   Navigate to `http://localhost:8080` in the browser to view the application.

<br />
<br />

## Instructions for running with Docker:

---

### Docker (Dev Mode):

1. Build the image with:

   ```
   docker build -t <YOUR-IMAGE-NAME> -f Dockerfile.dev .
   ```

   Or use the pre-made script in the `package.json` file:

   ```
   npm run build-image-dev
   ```

   NOTE: This will create a Docker image with the name `react-app-webpack-dev`

2. Run the container with Docker Compose:

   ```
   docker-compose -f docker-compose-dev.yml up
   ```

   Or use the pre-made script in the `package.json` file:

   ```
   npm run docker-dev
   ```

   <strong>NOTE:</strong> If you manually build the image in Step 1, replace the `image` property in `docker-compose-dev.yml` with your correct image name. If you created the image using `npm run build-image-dev`, all should be well.
   <br />
   <strong>NOTE:</strong> By default, this will create a container named `react-app-webpack-dev`. This can be changed in the `docker-compose-dev.yml` file under the `container_name` property.
   <br />
   <br />

### Docker (Production Mode):

1. Build the image with:

   ```
   docker-build -t <YOUR-IMAGE-NAME> .
   ```

   Or use the pre-made script in the `package.json` file:

   ```
   npm run build-image-prod
   ```

   <strong>NOTE:</strong> If you created the image using `npm run build-image-prod`, this will create a Docker image with the name: `react-app-webpack-prod`

2. Run the production Docker container with:
   ```
   docker run --rm --name react-app-webpack-prod -p 3000:3000 react-app-webpack-prod
   ```
   Or use the pre-made script in the `package.json` file:
   ```
   npm run docker-prod
   ```
