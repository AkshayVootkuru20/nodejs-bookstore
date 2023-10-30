const express = require('express');
const app = express.Router();
const Book = require('../models/book');

// Create a new book
app.post('/books', async (req, res) => {
  try {
    const { title, author, summary } = req.body;
    if (!title) {
        res.status(400).json({ error: 'Title is required' });
    } else if (!author) {
        res.status(400).json({ error: 'Author is required' });
    } else if (!summary) {
        res.status(400).json({ error: 'Summary is required' });
    } else {
        const newBook = new Book({ title, author, summary });
        const savedBook = await newBook.save();
        res.json(savedBook);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get a list of all books
app.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Get details of a specific book by its ID
app.get('/books/:id', async (req, res) => {
  try {
    if (!req.params.id) {
        res.status(400).json({ error: 'Id is required' });
    } else {
        const book = await Book.findById(req.params.id);
        if (!book) {
            res.status(404).json({ error: 'Book not found' });
            return;
        }
        res.json(book);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Update a book's details
app.put('/books/:id', async (req, res) => {
  try {
    if (!req.params.id) {
        res.status(400).json({ error: 'Id is required' });
    } else {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!book) {
        res.status(404).json({ error: 'Book not found' });
        return;
        }
        res.json(book);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete a book
app.delete('/books/:id', async (req, res) => {
    if (!req.params.id) {
        res.status(400).json({ error: 'Id is required' });
    } else {
        try {
            const book = await Book.findByIdAndRemove(req.params.id);
            if (!book) {
            res.status(404).json({ error: 'Book not found' });
            return;
            }
            res.json({ message: 'Book deleted' });
        } catch (err) {
            console.error(err);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
});

module.exports = app;
