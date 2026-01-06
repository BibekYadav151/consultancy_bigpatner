import { Contact } from './contact.model.js';
import { AppError } from '../../middleware/errorHandler.js';

// In-memory storage (replace with actual database operations)
let contacts = [];
let nextId = 1;

export class ContactRepository {
  /**
   * Get all contacts
   * @param {Object} filters - Optional filters (status, etc.)
   * @returns {Promise<Array>}
   */
  async findAll(filters = {}) {
    let results = [...contacts];

    // Apply filters
    if (filters.status) {
      results = results.filter(c => c.status === filters.status);
    }

    // Sort by createdAt (newest first)
    results.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return results;
  }

  /**
   * Find contact by ID
   * @param {number|string} id
   * @returns {Promise<Contact|null>}
   */
  async findById(id) {
    const contact = contacts.find(c => c.id === parseInt(id));
    return contact || null;
  }

  /**
   * Create new contact
   * @param {Object} data
   * @returns {Promise<Contact>}
   */
  async create(data) {
    const contact = new Contact({
      ...data,
      id: nextId++,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });

    contacts.push(contact);
    return contact;
  }

  /**
   * Update contact
   * @param {number|string} id
   * @param {Object} data
   * @returns {Promise<Contact>}
   */
  async update(id, data) {
    const index = contacts.findIndex(c => c.id === parseInt(id));
    
    if (index === -1) {
      throw new AppError('Contact not found', 404);
    }

    contacts[index] = {
      ...contacts[index],
      ...data,
      id: parseInt(id),
      updatedAt: new Date().toISOString()
    };

    return contacts[index];
  }

  /**
   * Delete contact
   * @param {number|string} id
   * @returns {Promise<boolean>}
   */
  async delete(id) {
    const index = contacts.findIndex(c => c.id === parseInt(id));
    
    if (index === -1) {
      throw new AppError('Contact not found', 404);
    }

    contacts.splice(index, 1);
    return true;
  }

  /**
   * Count contacts
   * @param {Object} filters
   * @returns {Promise<number>}
   */
  async count(filters = {}) {
    const results = await this.findAll(filters);
    return results.length;
  }
}

