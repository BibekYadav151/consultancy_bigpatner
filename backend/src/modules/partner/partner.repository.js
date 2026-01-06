import { Partner } from './partner.model.js';
import { AppError } from '../../middleware/errorHandler.js';

// In-memory storage (replace with actual database operations)
let partners = [];
let nextId = 1;

export class PartnerRepository {
  /**
   * Get all partners
   * @param {Object} filters - Optional filters (status, industry, etc.)
   * @returns {Promise<Array>}
   */
  async findAll(filters = {}) {
    let results = [...partners];

    // Apply filters
    if (filters.status) {
      results = results.filter(p => p.status === filters.status);
    }

    if (filters.industry) {
      results = results.filter(p => p.industry === filters.industry);
    }

    return results;
  }

  /**
   * Find partner by ID
   * @param {number|string} id
   * @returns {Promise<Partner|null>}
   */
  async findById(id) {
    const partner = partners.find(p => p.id === parseInt(id));
    return partner || null;
  }

  /**
   * Find partner by email
   * @param {string} email
   * @returns {Promise<Partner|null>}
   */
  async findByEmail(email) {
    const partner = partners.find(p => p.email === email);
    return partner || null;
  }

  /**
   * Create new partner
   * @param {Object} data
   * @returns {Promise<Partner>}
   */
  async create(data) {
    const partner = new Partner({
      ...data,
      id: nextId++,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    });

    partners.push(partner);
    return partner;
  }

  /**
   * Update partner
   * @param {number|string} id
   * @param {Object} data
   * @returns {Promise<Partner>}
   */
  async update(id, data) {
    const index = partners.findIndex(p => p.id === parseInt(id));
    
    if (index === -1) {
      throw new AppError('Partner not found', 404);
    }

    partners[index] = {
      ...partners[index],
      ...data,
      id: parseInt(id),
      updatedAt: new Date().toISOString()
    };

    return partners[index];
  }

  /**
   * Delete partner
   * @param {number|string} id
   * @returns {Promise<boolean>}
   */
  async delete(id) {
    const index = partners.findIndex(p => p.id === parseInt(id));
    
    if (index === -1) {
      throw new AppError('Partner not found', 404);
    }

    partners.splice(index, 1);
    return true;
  }

  /**
   * Count partners
   * @param {Object} filters
   * @returns {Promise<number>}
   */
  async count(filters = {}) {
    const results = await this.findAll(filters);
    return results.length;
  }
}

