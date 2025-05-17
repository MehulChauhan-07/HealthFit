const express = require("express");
const path = require("path");
const session = require("express-session");
const helmet = require("helmet");
const compression = require("compression");
const cors = require("cors");
const expressLayouts = require("express-ejs-layouts");
const connectDB = require("./src/config/database");

// Import routes
const userRoutes = require("./src/routes/userRoutes");
const workoutRoutes = require("./src/routes/workoutRoutes");

const app = express();
const port = process.env.PORT || 3001;

// Connect to MongoDB
connectDB();

// Basic middleware - These must come BEFORE routes
app.use(helmet({ contentSecurityPolicy: false }));
app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session middleware
app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
    },
  })
);

// Set EJS as the view engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Configure express-ejs-layouts
app.use(expressLayouts);
app.set("layout", "layout");
app.set("layout extractScripts", true);
app.set("layout extractStyles", true);

// Serve static files
app.use(express.static(path.join(__dirname, "public")));
app.use("/css", express.static(path.join(__dirname, "public/css")));
app.use("/js", express.static(path.join(__dirname, "public/js")));
app.use("/images", express.static(path.join(__dirname, "public/images")));

// Global variables middleware
app.use((req, res, next) => {
  res.locals.path = req.path;
  res.locals.user = req.session.user || null;
  next();
});

// API Routes - These must come BEFORE the view routes
app.use("/api/users", userRoutes);
app.use("/api/workouts", workoutRoutes);

// View Routes
app.get("/", (req, res) => {
  res.render("index", {
    title: "Home",
    description: "Your journey to a healthier lifestyle starts here",
    bodyClass: "home-page",
  });
});

app.get("/login", (req, res) => {
  if (req.session.user) {
    return res.redirect("/dashboard");
  }
  res.render("login", {
    title: "Login",
    description: "Login to your account",
    bodyClass: "login-page",
  });
});

app.get("/register", (req, res) => {
  if (req.session.user) {
    return res.redirect("/dashboard");
  }
  res.render("register", {
    title: "Register",
    description: "Create a new account",
    bodyClass: "register-page",
  });
});

app.get("/dashboard", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/login");
  }
  res.render("dashboard", {
    title: "Dashboard",
    description: "Your fitness dashboard",
    bodyClass: "dashboard-page",
    user: req.session.user,
  });
});

app.get("/workouts", (req, res) => {
  res.render("workouts", {
    title: "Workouts",
    description: "Browse our workout plans",
    bodyClass: "workouts-page",
  });
});

app.get("/nutrition", (req, res) => {
  res.render("nutrition", {
    title: "Nutrition",
    description: "Get expert nutrition guidance",
    bodyClass: "nutrition-page",
  });
});

app.get("/progress", (req, res) => {
  res.render("progress", {
    title: "Progress",
    description: "Track your fitness journey",
    bodyClass: "progress-page",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    description: "Learn more about us",
    bodyClass: "about-page",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact",
    description: "Get in touch with us",
    bodyClass: "contact-page",
  });
});

// Logout route
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Logout error:", err);
      return res.status(500).json({ message: "Error logging out" });
    }
    res.redirect("/login");
  });
});

// 404 handler - must be after all other routes
app.use((req, res, next) => {
  res.status(404).render("404", {
    title: "404 - Page Not Found",
    description: "The page you're looking for doesn't exist",
    bodyClass: "error-page",
  });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).render("error", {
    title: "Error",
    description: "Something went wrong",
    bodyClass: "error-page",
    error: process.env.NODE_ENV === "development" ? err : {},
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
