import { ContactService } from './contact.service.js';

export class ContactController {
  constructor() {
    this.contactService = new ContactService();
  }

  /**
   * Get all contacts
   * GET /api/v1/contacts
   */
  async getAll(req, res) {
    const filters = {
      status: req.query.status
    };

    const result = await this.contactService.getAllContacts(filters);
    res.status(200).json(result);
  }

  /**
   * Get contact by ID
   * GET /api/v1/contacts/:id
   */
  async getById(req, res) {
    const { id } = req.params;
    const result = await this.contactService.getContactById(id);
    res.status(200).json(result);
  }

  /**
   * Create new contact (contact form submission)
   * POST /api/v1/contacts
   */
  async create(req, res) {
    const result = await this.contactService.createContact(req.body);
    res.status(201).json(result);
  }

  /**
   * Update contact
   * PUT /api/v1/contacts/:id
   */
  async update(req, res) {
    const { id } = req.params;
    const result = await this.contactService.updateContact(id, req.body);
    res.status(200).json(result);
  }

  /**
   * Delete contact
   * DELETE /api/v1/contacts/:id
   */
  async delete(req, res) {
    const { id } = req.params;
    const result = await this.contactService.deleteContact(id);
    res.status(200).json(result);
  }
}

