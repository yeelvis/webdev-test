# Asana WebDev Take Home Test

This app was built with React with some styling done with Bootstrap 3. Bootstrap was used for styling the grid layout to display all of thumbnail images. The React app was creating with `create-react-app` to get a prototype of this application running quickly. `Font-Awesome` was also imported for two icon assets (expanding and close).

## Running the Application
Clone and navigate to the directory and run:

```
npm install
npm start
```

## Explanation
This is a simple app which displays a list of dog images. The images are laid out in a grid container in which the user can scroll to see more. The container supports infinite scrolling in which it will fetch more images to display. The infinite scrolling is utilize to display large volume of images without having to load all the images at once. As a demonstration, when the user scroll through the container, it will simply just repeat the images provided for this test.

## Components
There are a few components that was built for this application.

### App
This is the container which contains the bulk of the application. It is responsible for managing the state of the application as an user interact with it. It will keep track of whether an image is selected and responsible for toggling a modal to display an enlarge photo of the selected image.

### Modal
This modal will overlay the existing screen that the user is on and display an enlarged image of the selected card. This modal will dismiss and return back to the screen with all the images when the user click on the overlay or the close (`x`) button.

### Card Container & CardImage
The container will handle the click events for each card image while CardImage will simply be a presentation component to display a thumbnail version of a photo. Clicking on an CardImage will toggle a modal to display a larger image.