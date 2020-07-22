# Vaultie PDF Viewer

The current state of this application allows users to upload PDF's and view them on the web. 

Each PDF page is painted on Canvas one step at a time and allows for pagination.

To view a PDF, the user clicks the `Browse...` button to select the PDF that they would like to view.

If the PDF is sufficient the plan was to upload to the server for storage. I was going to use AWS S3 but I opted for a lighter solution using `express-fileupload` to save a bit of time with environment variables, keys and dotenv configuration.

## Features that are incomplete which I will finish regardless of my destiny

- [ ] Styling
- [ ] Fix the file uploader
- [ ] Dockerized app for deployments
- [ ] CI/CD for one click deploys
- [ ] Wire up Jest and write unit tests

## How to run the application
To run for the first time, ensure that you are in the project root and execute `./bin/startup.sh`

Any subsequent runs can be made in the server folder by running `npm run dev`

This is a bit jiggy due to the use of Concurrently to run both my back and front end servers.

The frontend will be found on port 8080 and the backend is running on 6000