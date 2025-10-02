📚 PLP Bookstore – MongoDB Assignment
📖 Overview

This project sets up a MongoDB database called plp_bookstore with a books collection.
It demonstrates:

Basic CRUD operations

Advanced queries (projection, sorting, pagination)

Aggregation pipelines

Indexing and performance analysis

🛠 Setup Instructions
1. Install MongoDB

Install MongoDB Community Edition
 or create a free MongoDB Atlas
 cluster.

Ensure mongosh (MongoDB Shell) is installed and working:

mongosh --version

2. Clone this Repository
git clone <your-repo-url>
cd <your-repo-folder>

3. Insert Sample Data

Run the script to populate the plp_bookstore.books collection with 10 sample books:

mongosh insert_books.js

4. Run Queries

Execute all queries (CRUD, advanced, aggregation, indexing):

mongosh queries.js


Or, load them from inside the shell:

mongosh
use plp_bookstore
load("queries.js")

📂 Project Structure
📦 plp_bookstore
 ┣ 📜 insert_books.js   # Script to insert 10 sample books
 ┣ 📜 queries.js        # All queries (CRUD, advanced, aggregation, indexing)
 ┣ 📜 README.md         # Documentation
 ┗ 📸 screenshot.png    # Screenshot of database in Compass/Atlas
