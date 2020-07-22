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

Ensure that you are in the project root and execute ./bin/startup.sh