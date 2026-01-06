import { ContactRepository } from './contact.repository.js';
import { Contact } from './contact.model.js';
import { AppError } from '../../middleware/errorHandler.js';

export class ContactService {
  constructor() {
    this.repository = new ContactRepository();
  }

  /**
   * Get all contacts
   * @param {Object} filters
   * @returns {Promise<Object>}
   */
  async getAllContacts(filters = {}) {
    const contacts = await this.repository.findAll(filters);
    const total = await this.repository.count(filters);

    return {
      success: true,
      data: contacts,
      total,
      count: contacts.length
    };
  }

  /**
   * Get contact by ID
   * @param {number|string} id
   * @returns {Promise<Object>}
   */
  async getContactById(id) {
    const contact = await this.repository.findById(id);

    if (!contact) {
      throw new AppError('Contact not found', 404);
    }

    return {
      success: true,
      data: contact
    };
  }

  /**
   * Create new contact
   * @param {Object} data
   * @returns {Promise<Object>}
   */
  async createContact(data) {
    // Create and validate contact model
    const contact = new Contact(data);
    const validation = contact.validate();

    if (!validation.isValid) {
      throw new AppError(`Validation failed: ${validation.errors.join(', ')}`, 400);
    }

    // Save contact
    const createdContact = await this.repository.create(data);

    return {
      success: true,
      message: 'Contact message received successfully',
      data: createdContact
    };
  }

  /**
   * Update contact
   * @param {number|string} id
   * @param {Object} data
   * @returns {Promise<Object>}
   */
  async updateContact(id, data) {
    // Check if contact exists
    const existingContact = await this.repository.findById(id);
    if (!existingContact) {
      throw new AppError('Contact not found', 404);
    }

    // Update contact
    const updatedContact = await this.repository.update(id, data);

    return {
      success: true,
      message: 'Contact updated successfully',
      data: updatedContact
    };
  }

  /**
   * Delete contact
   * @param {number|string} id
   * @returns {Promise<Object>}
   */
  async deleteContact(id) {
    // Check if contact exists
    const existingContact = await this.repository.findById(id);
    if (!existingContact) {
      throw new AppError('Contact not found', 404);
    }

    await this.repository.delete(id);

    return {
      success: true,
      message: 'Contact deleted successfully'
    };
  }
}

