# User Management System

## Overview
This project is a user management system that includes functionalities for user authentication, payment management, and data storage in Excel. The system allows users to log in, manage their payment plans, and view their payment history.

## Features
- User login functionality
- Payment management with options for installment plans
- Data storage and retrieval using Excel files
- Responsive frontend design

## Project Structure
```
user-management-system
├── backend
│   ├── app.py
│   ├── models.py
│   ├── routes.py
│   ├── services
│   │   └── payment_service.py
│   └── utils
│       └── excel_utils.py
├── frontend
│   ├── css
│   │   └── styles.css
│   ├── html
│   │   └── index.html
│   └── js
│       └── scripts.js
├── requirements.txt
└── README.md
```

## Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd user-management-system
   ```
3. Install the required dependencies:
   ```
   pip install -r requirements.txt
   ```

## Usage
1. Start the backend server:
   ```
   python backend/app.py
   ```
2. Open the frontend in a web browser:
   ```
   open frontend/html/index.html
   ```

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.