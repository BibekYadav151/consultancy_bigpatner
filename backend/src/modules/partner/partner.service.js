import { PartnerRepository } from './partner.repository.js';
import { Partner } from './partner.model.js';
import { AppError } from '../../middleware/errorHandler.js';

export class PartnerService {
  constructor() {
    this.repository = new PartnerRepository();
  }

  /**
   * Get all partners
   * @param {Object} filters
   * @returns {Promise<Object>}
   */
  async getAllPartners(filters = {}) {
    const partners = await this.repository.findAll(filters);
    const total = await this.repository.count(filters);

    return {
      success: true,
      data: partners,
      total,
      count: partners.length
    };
  }

  /**
   * Get partner by ID
   * @param {number|string} id
   * @returns {Promise<Object>}
   */
  async getPartnerById(id) {
    const partner = await this.repository.findById(id);

    if (!partner) {
      throw new AppError('Partner not found', 404);
    }

    return {
      success: true,
      data: partner
    };
  }

  /**
   * Create new partner
   * @param {Object} data
   * @returns {Promise<Object>}
   */
  async createPartner(data) {
    // Check if partner with email already exists
    const existingPartner = await this.repository.findByEmail(data.email);
    if (existingPartner) {
      throw new AppError('Partner with this email already exists', 409);
    }

    // Create and validate partner model
    const partner = new Partner(data);
    const validation = partner.validate();

    if (!validation.isValid) {
      throw new AppError(`Validation failed: ${validation.errors.join(', ')}`, 400);
    }

    // Save partner
    const createdPartner = await this.repository.create(data);

    return {
      success: true,
      message: 'Partner created successfully',
      data: createdPartner
    };
  }

  /**
   * Update partner
   * @param {number|string} id
   * @param {Object} data
   * @returns {Promise<Object>}
   */
  async updatePartner(id, data) {
    // Check if partner exists
    const existingPartner = await this.repository.findById(id);
    if (!existingPartner) {
      throw new AppError('Partner not found', 404);
    }

    // If email is being updated, check for duplicates
    if (data.email && data.email !== existingPartner.email) {
      const emailExists = await this.repository.findByEmail(data.email);
      if (emailExists) {
        throw new AppError('Partner with this email already exists', 409);
      }
    }

    // Update partner
    const updatedPartner = await this.repository.update(id, data);

    return {
      success: true,
      message: 'Partner updated successfully',
      data: updatedPartner
    };
  }

  /**
   * Delete partner
   * @param {number|string} id
   * @returns {Promise<Object>}
   */
  async deletePartner(id) {
    // Check if partner exists
    const existingPartner = await this.repository.findById(id);
    if (!existingPartner) {
      throw new AppError('Partner not found', 404);
    }

    await this.repository.delete(id);

    return {
      success: true,
      message: 'Partner deleted successfully'
    };
  }
}

