// queries.js
// All CRUD, advanced queries, aggregations, and indexing tasks

use plp_bookstore

// -------------------
// BASIC CRUD QUERIES
// -------------------

// Find all books in a specific genre
db.books.find({ genre: "Programming" })

// Find books published after a certain year
db.books.find({ published_year: { $gt: 2010 } })

// Find books by a specific author
db.books.find({ author: "Yuval Noah Harari" })

// Update the price of a specific book
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 25 } }
)

// Delete a book by its title
db.books.deleteOne({ title: "The Alchemist" })

// -------------------
// ADVANCED QUERIES
// -------------------

// Find books in stock & published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } })

// Projection (title, author, price only)
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })

// Sort by price ascending
db.books.find().sort({ price: 1 })

// Sort by price descending
db.books.find().sort({ price: -1 })

// Pagination (page 1: first 5)
db.books.find().limit(5)

// Pagination (page 2: skip 5, show next 5)
db.books.find().skip(5).limit(5)

// -------------------
// AGGREGATION PIPELINES
// -------------------

// Average price by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
])

// Author with most books
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
])

// Group books by publication decade
db.books.aggregate([
  {
    $group: {
      _id: { $subtract: [ { $divide: ["$published_year", 10] }, { $mod: [ { $divide: ["$published_year", 10] }, 1 ] } ] },
      count: { $sum: 1 }
    }
  },
  { $sort: { _id: 1 } }
])

// -------------------
// INDEXING
// -------------------

// Index on title
db.books.createIndex({ title: 1 })

// Compound index on author + published_year
db.books.createIndex({ author: 1, published_year: -1 })

// Explain query performance with index
db.books.find({ title: "Clean Code" }).explain("executionStats")
