# Big Partner Consultancy - Backend API

Express.js backend API for Big Partner Consultancy with modular architecture using repository pattern.

## Architecture

The backend follows a modular structure with separation of concerns:

```
backend/
├── src/
│   ├── config/          # Configuration files (database, etc.)
│   ├── middleware/       # Express middleware (error handling, etc.)
│   ├── modules/          # Feature modules
│   │   ├── partner/      # Partner module
│   │   │   ├── partner.model.js
│   │   │   ├── partner.repository.js
│   │   │   ├── partner.service.js
│   │   │   └── partner.controller.js
│   │   └── contact/      # Contact module
│   │       ├── contact.model.js
│   │       ├── contact.repository.js
│   │       ├── contact.service.js
│   │       └── contact.controller.js
│   └── routes/           # API routes
├── server.js             # Application entry point
└── package.json
```

## Pattern Structure

Each module follows the **Repository Pattern**:

1. **Model** (`*.model.js`) - Data structure and validation
2. **Repository** (`*.repository.js`) - Data access layer (database operations)
3. **Service** (`*.service.js`) - Business logic layer
4. **Controller** (`*.controller.js`) - HTTP request/response handling

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file from `.env.example`:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm run dev
```

The server will start on `http://localhost:3000`

### Production

```bash
npm start
```

## API Endpoints

### Health Check
- `GET /health` - Server health status

### Partners API
- `GET /api/v1/partners` - Get all partners
- `GET /api/v1/partners/:id` - Get partner by ID
- `POST /api/v1/partners` - Create new partner
- `PUT /api/v1/partners/:id` - Update partner
- `DELETE /api/v1/partners/:id` - Delete partner

**Query Parameters:**
- `?status=active` - Filter by status
- `?industry=tech` - Filter by industry

### Contacts API
- `GET /api/v1/contacts` - Get all contacts
- `GET /api/v1/contacts/:id` - Get contact by ID
- `POST /api/v1/contacts` - Create new contact (contact form)
- `PUT /api/v1/contacts/:id` - Update contact
- `DELETE /api/v1/contacts/:id` - Delete contact

**Query Parameters:**
- `?status=new` - Filter by status (new, contacted, resolved)

## Example Requests

### Create Partner
```bash
POST /api/v1/partners
Content-Type: application/json

{
  "name": "John Doe",
  "company": "Tech Corp",
  "email": "john@techcorp.com",
  "phone": "+1234567890",
  "industry": "Technology",
  "partnershipType": "Strategic"
}
```

### Create Contact
```bash
POST /api/v1/contacts
Content-Type: application/json

{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "company": "Example Inc",
  "phone": "+1234567890",
  "message": "Interested in partnership opportunities"
}
```

## Environment Variables

Create a `.env` file with:

```
PORT=3000
NODE_ENV=development
API_VERSION=v1
```

## Database Integration

Currently using in-memory storage. To integrate with a database:

1. Update `src/config/database.js` with your database connection
2. Update repository files (`*.repository.js`) to use actual database queries
3. Install appropriate database driver (mongoose, pg, mysql2, etc.)

## Middleware

- **helmet** - Security headers
- **cors** - Cross-origin resource sharing
- **morgan** - HTTP request logging
- **errorHandler** - Centralized error handling
- **asyncHandler** - Async route handler wrapper

## Development

The project uses `nodemon` for automatic server restart during development.

## License

Private project for Big Partner Consultancy

