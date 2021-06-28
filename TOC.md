# TOC for Express GET POST PUT DELETE

## The objective is to receive URL with differnt http verbs and modify the backend DB procesisng the data sent with the request

- ### Step 0. Understand API endpoint URL
[REST API Conventions](https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api)


- ### Step 1. Create the route that responds to the request for a list of resurces (books)


- ### Step 2. Create the route that creates a resource (book)

   - ### 2.2 First create a POST route and verify that you can correctly create the resource using a mock update object

   - ### 2.3 Prepare a GET response on the same route to send the user a form they can use to send info to your backend to create the resource

   - ### 2.5 Optionally do some verification on the form 


- ### Step 3. Create the route that updates the content of one resource
 
   - ### 3.1 First decide how to identify the resource (by id)

   - ### 3.2 Second create a PUT route and verify that you can correctly update the resource using a mock update object

   - ### 3.3 Prepare a GET response on the same route to send the user a form they can use to send info to your backend to update the resource

   - ### 3.4 See how you can pre-load the form with data so tha the user can modify it

   - ### 3.5 Optionally do some verification on the form 


- ## Step 4 create the route that deletes the resource