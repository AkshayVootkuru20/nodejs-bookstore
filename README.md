# Book Store
A RESTful API for managing books using `Node.js` and `MongoDB`.

### Getting Started
These instructions will help you set up and run the project on your local machine.

### Prerequisites
You'll need the following software and tools to run the project:

    Node.js - JavaScript runtime
    npm - Node Package Manager
    MongoDB - A MongoDB server running locally or a connection to a MongoDB Atlas cluster.
    curl (optional) - To make API requests from the command line.
    
### Installing
#### 1. Clone the repository to your local machine: 

    git clone https://github.com/AkshayVootkuru20/nodejs-bookstore.git
    
#### 2. Change to the project directory:

    cd book-api
    
#### 3. Install project dependencies:

    npm install
    
#### 4. Start the API server:

    npm start
    
##### - The server will run on http://localhost:3000 by default. You can change the port in `app.js` if needed.

#### 5. Ensure `MongoDB` is running, either locally or via `MongoDB Atlas`, and update the database connection URI in `app.js` if necessary.

### API Endpoints
The API provides the following endpoints:

    POST /api/books: Create a new book.
    GET /api/books: Retrieve a list of all books.
    GET /api/books/:id: Retrieve details of a specific book by its ID.
    PUT /api/books/:id: Update a book's details.
    DELETE /api/books/:id: Delete a book.

### Adding a Book
You can add a book by sending a `POST` request using a tool like curl or Postman:

- Example using curl:

    ```
    curl -X POST -H "Content-Type: application/json" -d '{
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "summary": "A novel depicting the extravagant and decadent lifestyle of the 1920s in America."
    }' http://localhost:3000/api/books
    ```

- Make sure to replace the data with the book information you want to add.

### Viewing Books
To view all books, send a `GET` request to `/api/books`.

To view details of a specific book by its ID, send a `GET` request to `/api/books/:id`.

### Updating and Deleting Books
To update a book's details, send a `PUT` request to `/api/books/:id`.

To delete a book, send a `DELETE` request to `/api/books/:id`.

### Authors
- Akshay Vootkuru

### License
This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgments
- Node.js
- MongoDB
- Express
- Mongoose
