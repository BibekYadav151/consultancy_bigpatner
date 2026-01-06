import { PartnerService } from './partner.service.js';

export class PartnerController {
  constructor() {
    this.partnerService = new PartnerService();
  }

  /**
   * Get all partners
   * GET /api/v1/partners
   */
  async getAll(req, res) {
    const filters = {
      status: req.query.status,
      industry: req.query.industry
    };

    const result = await this.partnerService.getAllPartners(filters);
    res.status(200).json(result);
  }

  /**
   * Get partner by ID
   * GET /api/v1/partners/:id
   */
  async getById(req, res) {
    const { id } = req.params;
    const result = await this.partnerService.getPartnerById(id);
    res.status(200).json(result);
  }

  /**
   * Create new partner
   * POST /api/v1/partners
   */
  async create(req, res) {
    const result = await this.partnerService.createPartner(req.body);
    res.status(201).json(result);
  }

  /**
   * Update partner
   * PUT /api/v1/partners/:id
   */
  async update(req, res) {
    const { id } = req.params;
    const result = await this.partnerService.updatePartner(id, req.body);
    res.status(200).json(result);
  }

  /**
   * Delete partner
   * DELETE /api/v1/partners/:id
   */
  async delete(req, res) {
    const { id } = req.params;
    const result = await this.partnerService.deletePartner(id);
    res.status(200).json(result);
  }
}

