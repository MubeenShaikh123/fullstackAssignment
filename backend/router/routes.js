const express = require('express');
const router = express.Router();
const Card = require('../model/card')

// Create a card
router.post('/', async (req, res) => {
    try {
        const { title, description } = req.body;

        // Validate that title and description are provided
        if (!title || !description) {
            return res.status(400).json({ message: 'Title and description are required' });
        }

        const newCard = new Card({ title, description });
        await newCard.save();
        res.status(201).json(newCard);
    } catch (error) {
        res.status(500).json({ message: 'Error creating card', error: error.message });
    }
});

// Get all cards
router.get('/', async (req, res) => {
    try {
        const cards = await Card.find();

        // Check if cards were found
        if (cards.length === 0) {
            return res.status(404).json({ message: 'No cards found' });
        }

        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving cards', error: error.message });
    }
});

// Get a specific card by title
router.get('/:title', async (req, res) => {
    try {
        // Find the card by title
        const card = await Card.findOne({ title: req.params.title });

        // Check if the card was found
        if (!card) {
            return res.status(404).json({ message: 'Card not found' });
        }

        // Return the found card
        res.status(200).json(card);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving card', error: error.message });
    }
});

// Update a card by title
router.put('/:title', async (req, res) => {
    try {
        const { title, description } = req.body;

        // Check if both title and description are provided
        if (!title || !description) {
            return res.status(400).json({ message: 'Title and description are required' });
        }

        // Find the card by title and update it
        const updatedCard = await Card.findOneAndUpdate(
            { title: req.params.title }, // Filter by the card title
            { title, description }, // Update fields
            { new: true } // Return the updated card
        );

        // Check if the card was found and updated
        if (!updatedCard) {
            return res.status(404).json({ message: 'Card not found' });
        }

        // Return the updated card
        res.status(200).json(updatedCard);
    } catch (error) {
        console.error('Error updating card:', error); // Log the error
        res.status(500).json({ message: 'Error updating card', error: error.message });
    }
});

// Delete a card by title
router.delete('/:title', async (req, res) => {
    try {
        // Find the card by title and delete it
        const deletedCard = await Card.findOneAndDelete({ title: req.params.title });

        // Check if the card was found and deleted
        if (!deletedCard) {
            return res.status(404).json({ message: 'Card not found' });
        }

        // Return a success message
        res.status(200).json({ message: 'Card deleted successfully' });
    } catch (error) {
        console.error('Error deleting card:', error); // Log the error
        res.status(500).json({ message: 'Error deleting card', error: error.message });
    }
});


module.exports = router;
