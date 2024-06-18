import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import connect from './database/conn.js';
import router from './router/route.js';
import config from './config.js'; 

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');

const port = 8080;

// HTTP GET Request
app.get('/', (req, res) => {
    res.status(200).json("Home GET Request");
});

// API routes
app.use('/api', router);

// Start server only when there is a valid database connection
connect().then(() => {
    app.listen(port, () => {
        console.log(`Server connected to http://localhost:${port}`);
    });
}).catch(error => {
    console.error("Invalid database connection:", error);
});


// server.js
// import express from 'express';
// import cors from 'cors';
// import connectDB from './database/conn.js';
// import config from './config.js';
// import nodemailer from 'nodemailer';
// import multer from 'multer';
// import jwt from 'jsonwebtoken';
// import bcrypt from 'bcryptjs';

// const app = express();
// const PORT = process.env.PORT || 8080;

// app.use(cors());
// app.use(express.json());

// connectDB();

// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

// const userSchema = new mongoose.Schema({
//   username: String,
//   password: String,
//   email: String,
// });

// const User = mongoose.model('User', userSchema);

// app.post('/login', async (req, res) => {
//   const { username, password } = req.body;
//   const user = await User.findOne({ username });
//   if (user && bcrypt.compareSync(password, user.password)) {
//     const token = jwt.sign({ id: user._id }, config.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token });
//   } else {
//     res.status(401).json({ message: 'Invalid credentials' });
//   }
// });

// app.post('/register', async (req, res) => {
//   const { username, password, email } = req.body;
//   const hashedPassword = bcrypt.hashSync(password, 10);
//   const newUser = new User({ username, password: hashedPassword, email });
//   await newUser.save();
//   res.status(201).json({ message: 'User registered successfully' });
// });

// app.get('/profile', (req, res) => {
//   const token = req.headers.authorization.split(' ')[1];
//   jwt.verify(token, config.JWT_SECRET, async (err, decoded) => {
//     if (err) return res.status(403).json({ message: 'Unauthorized' });
//     const user = await User.findById(decoded.id);
//     res.json({ username: user.username, email: user.email });
//   });
// });

// app.put('/profile', upload.single('profilePic'), (req, res) => {
//   const token = req.headers.authorization.split(' ')[1];
//   jwt.verify(token, config.JWT_SECRET, async (err, decoded) => {
//     if (err) return res.status(403).json({ message: 'Unauthorized' });
//     const { email } = req.body;
//     const user = await User.findById(decoded.id);
//     user.email = email;
//     if (req.file) {
//       user.profilePic = req.file.buffer;
//     }
//     await user.save();
//     res.json({ message: 'Profile updated successfully' });
//   });
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
