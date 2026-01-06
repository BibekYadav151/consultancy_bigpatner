import express from 'express';
import partnerRoutes from './partner.routes.js';
import contactRoutes from './contact.routes.js';

const router = express.Router();

// API version prefix
const API_VERSION = process.env.API_VERSION || 'v1';

// Route modules
router.use(`/${API_VERSION}/partners`, partnerRoutes);
router.use(`/${API_VERSION}/contacts`, contactRoutes);

// API info endpoint
router.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'Big Partner Consultancy API',
    version: API_VERSION,
    endpoints: {
      partners: `/api/${API_VERSION}/partners`,
      contacts: `/api/${API_VERSION}/contacts`
    }
  });
});

export default router;

