# Challenge: Design a RESTful Web API

## Introduction

My project is a simple Node.js application using the Express.js framework. It has a hard-coded array of five objects with the below schema:

```
id,
name,
type
```

This schema could pertain to a variety of things, but in this case I'm using it for animals. For example, the first element in the array is:

```
id: 1,
name: "Goober",
type: "Giraffe"
```

The API itself supports CRUD functionality. Specifics are below.

> \*Note: It's been awhile since I've used Node and Express, so I rewatched a tutorial from Traversy Media linked [here](https://www.youtube.com/watch?v=L72fhGm1tfE). My project is referenced from his tutorial.

## Getting Started

To run this project, you need:

- Node.js and NPM (which typically comes installed with Node.js) installed
- An API testing tool. I used [Postman](https://www.postman.com/).

After these steps are completed, clone this repo to your local machine. Once this is complete, navigate to wherever the project is stored and run the following command in the terminal:

> \$ npm i

This installs all the dependencies needed to run this project.

## Format

There are three main files to this project: "server.js", "animals.js", and "routes.js".

### Server.js

This file simply runs the web server.

### Animals.js

This file contains the hard-coded array of 5 animal objects.

### Routes.js

This file contains all the routes for the CRUD functions of the API.

## Use

To run the server, type the following command into the terminal

> \$ npm run start

The terminal should have the output of "Server started on port 5000". If you already have an environment variable for the port set, then the number after "port" will reflect that number.

After the server is running, open up Postman. To ensure that everything is working correctly, do a GET request of the following URL:

> http://localhost:5000/api/animals

Again, if the port you're using isn't 5000, replace the 5000 in the URL with your port.

After sending the GET request, you should see a JSON array of five objects.

Now onto demonstrating the CRUD functions.

#### Create

Change the type of HTTP method to POST. Use the same URL as the GET request. Now click on the "Headers" tab and you should see "Key" and "Value".

For "Key" enter:

> Content-Type

For "Value" enter:

> application/json

Click on the "Body" tab and change the type to "raw". In the text area, type a name and type using JSON syntax. For example, if I wanted to add a new animal named "Beatrice" and type "Bumblebee", I would type:

```
{
    "name": "Beatrice",
    "type": "Bumblebee"
}
```

If everything worked correctly, then you should see the updated JSON array output on the bottom.

#### Read

I already demonstrated the read functionality using a GET request, but I also implemented searching by ID, which also uses GET.

On Postman, change the HTTP method to GET, and enter the same URL we've been using so far. However, to find a specific animal type a forward slash and the ID you want to search. For example, if I wanted to find the third animal in the array, I would use the following URL:

> http://localhost:5000/api/animals/3

If everything worked correctly, you should see the JSON object output at the bottom. If not, you should see an error message.

#### Update

To update an entry already in the array, we use a PUT request. So change the HTTP method to PUT. To select the entry to update, use the same URL for reading a specific entry. Then you follow the same steps as in **create** to change the content type and enter information in the body.

Here you can choose to update both the name and type, or just one; both are supported.

If everything worked correctly, you should see a JSON object containing a message saying "Array has been updated, along with the updated entry output at the bottom.

#### Delete

To delete an entry in the array, change the HTTP method to DELETE. Then enter the URL with the ID of the entry you want deleted.

If everything worked correctly, you should see a JSON object containing a message "Animal deleted from array" and the updated array output at the bottom.
