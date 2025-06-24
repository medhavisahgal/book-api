const express = require('express');
const router = express.Router();
const Book = require('../models/Book');
// Get all books
router.get('/',async(req,res)=>{
    try {
        const books = await Book.find();
        res.json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
// Post a new book
router.post('/',async(req,res)=>{
    const book = new Book(req.body);
    try {
        const newBook = await book.save();
        res.status(201).json(newBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
router.post('/bulk', async (req, res) => {
    try {
        const books = await Book.insertMany(req.body);
        res.status(201).json(books);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
router.put('/:id',async(req,res)=>{
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json(book);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});
// Get a book by ID
router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.json(book);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});
// Delete a book
router.delete('/:id',async(req,res)=>{
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;