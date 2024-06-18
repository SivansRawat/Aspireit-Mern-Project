# Aspireit Mern Project

This project is a full-stack MERN (MongoDB, Express, React, Node.js) application that implements a user authentication system, including registration, login, profile management, and password reset functionality via email.

## Features

- User Registration
- User Login
- JWT-based Authentication
- Profile Management
- Password Reset via Email
- Responsive Design
- State Management using Redux (optional)

## Prerequisites

- Node.js
- MongoDB
- npm or yarn

## Project Structure


MERN_Login_App_with_ResetEmail/
│
├── client/                 # React frontend
│   ├── public/
│   ├── src/
│   ├── .env                # Environment variables for client
│   ├── package.json
│   └── ...
│
├── server/                 # Express backend
│   ├── controllers/
│   ├── database/
│   ├── middleware/
│   ├── models/
│   ├── router/
│   ├── config.js           # Configuration file for server
│   ├── server.js           # Entry point for the server
│   ├── package.json
│   └── ...
│
└── README.md


## Installation

### Clone the repository

bash
git clone https://github.com/yourusername/MERN_Login_App_with_ResetEmail.git
cd MERN_Login_App_with_ResetEmail


### Setup the Server

1. Navigate to the server directory:

bash
cd server


2. Install server dependencies:

bash
npm install


3. Create a `config.js` file in the `server` directory with the following content:

javascript
export default {
    JWT_SECRET: "your_jwt_secret",
    EMAIL: "your_test_email@ethereal.email",
    PASSWORD: "your_email_password",
    ATLAS_URI: "your_mongodb_atlas_uri"
};


### Setup the Client

1. Navigate to the client directory:

bash
cd ../client


2. Install client dependencies:

bash
npm install


3. Create a `.env` file in the `client` directory with the following content:


REACT_APP_SERVER_DOMAIN='http://localhost:8080'


## Running the Application

### Start the Server

1. Navigate to the server directory if not already there:

bash
cd server


2. Start the server:

bash
npm start


### Start the Client

1. Navigate to the client directory if not already there:

bash
cd ../client


2. Start the client:

bash
npm start


The client will typically run on `http://localhost:3000` and the server on `http://localhost:8080`.

## API Endpoints

### Auth Routes

- `POST /api/register` - Register a new user
- `POST /api/login` - Login an existing user
- `POST /api/registerMail` - Send registration email
- `POST /api/authenticate` - Authenticate a user
- `GET /api/user/:username` - Get user by username
- `GET /api/generateOTP` - Generate OTP for password reset
- `GET /api/verifyOTP` - Verify OTP
- `GET /api/createResetSession` - Create a reset session
- `PUT /api/updateuser` - Update user profile
- `PUT /api/resetPassword` - Reset user password

## Technologies Used

- MongoDB
- Express.js
- React.js
- Node.js
- JWT for authentication
- bcrypt for password hashing
- Nodemailer for sending emails

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request for any enhancements.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [MongoDB](https://www.mongodb.com/)
- [Express](https://expressjs.com/)
- [React](https://reactjs.org/)
- [Node.js](https://nodejs.org/)
- [Nodemailer](https://nodemailer.com/)

## Contact

For any questions or inquiries, please contact [rawatsivans@gmail.com](mailto:rawatsivans@gmail.com)

