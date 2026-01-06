import express from 'express';
import { ContactController } from '../modules/contact/contact.controller.js';
import { asyncHandler } from '../middleware/asyncHandler.js';

const router = express.Router();
const contactController = new ContactController();

// Get all contacts
router.get('/', asyncHandler((req, res) => contactController.getAll(req, res)));

// Get contact by ID
router.get('/:id', asyncHandler((req, res) => contactController.getById(req, res)));

// Create new contact (contact form submission)
router.post('/', asyncHandler((req, res) => contactController.create(req, res)));

// Update contact
router.put('/:id', asyncHandler((req, res) => contactController.update(req, res)));

// Delete contact
router.delete('/:id', asyncHandler((req, res) => contactController.delete(req, res)));

export default router;

