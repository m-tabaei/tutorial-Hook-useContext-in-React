# tutorial-Hook-useContext-in-React

![App.js](https://github.com/m-tabaei/tutorial-Hook-useContext-in-React/blob/main/useContext.JPG?raw=true)


In this code, we create a context called MyContext and use the useState hook to manage the slider, error, and loading states. We also define an async function fetchSlider to fetch data from an API and update the state accordingly. The useEffect hook is used to trigger the data fetching when the component mounts.

Now, let's explain the ComB component:

![ComponentB](https://github.com/m-tabaei/tutorial-Hook-useContext-in-React/blob/main/useContext1.JPG?raw=true)

In the ComB component, we use the useContext hook to access the values (slider, error, and loading) provided by the MyContext context. We then conditionally render an error message if there is an error and a loading spinner while data is being fetched. Finally, we render a Carousel component using the slider data from the context.

This code structure allows you to pass and access the slider, error, and loading values across different components using the MyContext context.

![ComponentB](https://github.com/m-tabaei/tutorial-Hook-useContext-in-React/blob/main/useContext2.JPG?raw=true)

![result](https://github.com/m-tabaei/tutorial-Hook-useContext-in-React/blob/main/useContext3.JPG?raw=true)


- 🔗 ([https://tutorial-hook-use-context-in-react.vercel.app/])
-
- 💻 Developed by Seyed Mohammad Tabaei
- 📆 Created - 2023
- 🔧 Technologies Used - React Hook, UseState, useEffect, useContext
- 🧑‍ Role - Frontend

- How to reach me : with my [e-mail](https://www.m-tabaie@gmail.com) and [linkedin](https://www.linkedin.com/in/mohammad-tabaei/)
