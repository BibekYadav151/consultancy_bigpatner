// Partner data model
// This can be replaced with actual database schema/model when integrating with a database

export class Partner {
  constructor(data) {
    this.id = data.id || null;
    this.name = data.name || '';
    this.company = data.company || '';
    this.email = data.email || '';
    this.phone = data.phone || '';
    this.industry = data.industry || '';
    this.partnershipType = data.partnershipType || '';
    this.status = data.status || 'active';
    this.createdAt = data.createdAt || new Date().toISOString();
    this.updatedAt = data.updatedAt || new Date().toISOString();
  }

  validate() {
    const errors = [];
    
    if (!this.name || this.name.trim().length === 0) {
      errors.push('Name is required');
    }
    
    if (!this.email || !this.isValidEmail(this.email)) {
      errors.push('Valid email is required');
    }
    
    if (!this.company || this.company.trim().length === 0) {
      errors.push('Company name is required');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  toJSON() {
    return {
      id: this.id,
      name: this.name,
      company: this.company,
      email: this.email,
      phone: this.phone,
      industry: this.industry,
      partnershipType: this.partnershipType,
      status: this.status,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    };
  }
}

