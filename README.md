# Health & Fitness Website

A comprehensive health and fitness platform that helps users track their fitness journey, manage workouts, and maintain a healthy lifestyle.

## 🚀 Features

- **User Authentication**

  - Secure registration and login system
  - Session-based authentication
  - Password encryption

- **Dashboard**

  - User profile management
  - Progress tracking
  - Activity monitoring
  - Goal setting

- **Fitness Tracking**
  - Workout logging
  - Progress monitoring
  - Activity tracking
  - Goal management

## 🛠️ Technical Stack

### Backend

- Node.js with Express.js
- MySQL Database
- EJS Template Engine
- Express-session for authentication
- bcryptjs for password hashing

### Frontend

- HTML5/CSS3
- Vanilla JavaScript
- EJS Templates
- Responsive Design

### Security

- Helmet for security headers
- Express-rate-limit for API protection
- CORS protection
- Input validation and sanitization

## 📁 Project Structure

```
HealthFitnessWebsite/
├── public/           # Static files (CSS, client-side JS, images)
├── views/           # EJS templates
├── src/             # Source code
├── js/              # JavaScript files
├── css/             # Stylesheets
├── images/          # Image assets
├── server.js        # Main application file
└── health_fitness_app.sql  # Database schema
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MySQL Server
- npm or yarn

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/health-fitness-website.git
cd health-fitness-website
```

2. Install dependencies

```bash
npm install
```

3. Set up environment variables
   Create a `.env` file in the root directory with the following variables:

```env
DB_HOST=localhost
DB_USER=your_username
DB_PASSWORD=your_password
DB_NAME=health_fitness_db
SESSION_SECRET=your_session_secret
```

4. Initialize the database

```bash
mysql -u your_username -p < health_fitness_app.sql
```

5. Start the development server

```bash
npm run dev
```

The application will be available at `http://localhost:3001`

## 📝 API Endpoints

### Authentication

- `POST /api/users/register` - User registration
- `POST /api/users/login` - User login
- `GET /api/users/logout` - User logout

### User Management

- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `GET /api/users/dashboard` - Get dashboard data

## 🔒 Security Features

- Password hashing using bcryptjs
- Session-based authentication
- Rate limiting for API endpoints
- Helmet security headers
- CORS protection
- Input validation and sanitization

## 🎨 Frontend Features

- Responsive design for all devices
- Interactive form validation
- Modal dialogs for detailed views
- Progress tracking visualization
- Clean and intuitive navigation
- Real-time feedback

## 🛠️ Development

### Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with nodemon

### Code Style

- Follow standard JavaScript conventions
- Use meaningful variable and function names
- Comment complex logic
- Keep functions small and focused

## 📈 Future Enhancements

1. **Planned Features**

   - Social sharing capabilities
   - Advanced analytics
   - Mobile app integration
   - Real-time progress tracking

2. **Technical Improvements**
   - API documentation
   - Unit testing
   - Performance optimization
   - Enhanced security measures

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- Your Name - Initial work

## 🙏 Acknowledgments

- Express.js team for the amazing framework
- MySQL team for the database
- All contributors who have helped shape this project

## 📞 Support

For support, email your-email@example.com or create an issue in the repository.
