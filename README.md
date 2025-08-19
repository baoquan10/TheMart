# E-Commerce Platform

## Overview
This project is an e-commerce platform that enables users to buy and sell products. The platform provides two distinct interfaces: one for sellers to manage their products and sales, and another for buyers to browse, purchase, and review products. The system is designed for scalability, modern UI/UX, and efficient backend operations.

## Project Structure
```
TheMart/
│
├── app.py                  # Main Flask application (routes, models, logic)
├── database.py             # MongoDB connection and helpers
├── static/                 # CSS, JS, images, fonts
├── templates/              # HTML templates (Jinja2)
├── requirements.txt        # Python dependencies
├── README.md               # Project documentation
└── ...
```


## Technologies & Frameworks
- **Backend:** Python Flask (with Flask-Login for authentication)
- **Database:** MongoDB (local)
- **Frontend:**
  - Bootstrap 6 (UI framework)
  - Font Awesome 5 (icon library)
  - Google Fonts (typography)
- **API Communication:** XHR (XMLHttpRequest)
- **UI Components:**
  - Loading component on every page
  - Modal-based alerts (no default browser alerts)
## API List (Planned)

- **Auth APIs:**
  - `POST /api/login` — User login (Flask-Login)
  - `POST /api/logout` — User logout
  - `POST /api/register` — User registration

- **Product APIs:**
  - `GET /api/products` — List all products
  - `POST /api/products` — Add new product (seller)
  - `GET /api/products/<id>` — Get product details
  - `PUT /api/products/<id>` — Update product (seller)
  - `DELETE /api/products/<id>` — Delete product (seller)

- **Order APIs:**
  - `POST /api/orders` — Place an order (buyer)
  - `GET /api/orders` — List user orders
  - `GET /api/orders/sales` — List seller sales

- **User APIs:**
  - `GET /api/user` — Get user profile
  - `PUT /api/user` — Update user profile


## Important Notes
- The project now uses a flat structure (no separate backend/frontend folders).
- All routes and models are defined in `app.py` for simplicity.
- MongoDB is used as the local database, with connection logic in `database.py`.
- Flask-Login is integrated for secure authentication and session management.
- All user and seller actions that require feedback will use modals for alerts and confirmations.
- Every page will include a loading component to enhance user experience during data fetching or processing.
- The frontend will be responsive and modern, leveraging Bootstrap 6 and Google Fonts for a clean look.
- XHR will be used for all API calls to ensure compatibility and control over requests.

---

For further details, refer to the documentation in each folder and the code comments throughout the project.
