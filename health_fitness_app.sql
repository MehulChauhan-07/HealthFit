-- SQL schema for Health and Fitness Assistant
-- Create Database
CREATE DATABASE IF NOT EXISTS health_fitness_app;
USE health_fitness_app;

-- Users Table
CREATE TABLE IF NOT EXISTS users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    gender ENUM('M','F','O'),
    dob DATE,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    last_login DATETIME
);

-- User Profiles Table
CREATE TABLE IF NOT EXISTS user_profiles (
    profile_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    height_cm FLOAT,
    weight_kg FLOAT,
    activity_level ENUM('sedentary','light','moderate','active','very_active'),
    goal ENUM('lose_weight','gain_muscle','maintain'),
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- Workouts Table
CREATE TABLE IF NOT EXISTS workouts (
    workout_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    description TEXT,
    difficulty ENUM('beginner','intermediate','advanced'),
    duration_min INT
);

-- User Workouts Table
CREATE TABLE IF NOT EXISTS user_workouts (
    user_workout_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    workout_id INT NOT NULL,
    date_assigned DATE,
    date_completed DATE,
    notes TEXT,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (workout_id) REFERENCES workouts(workout_id) ON DELETE CASCADE
);

-- Nutrition Table
CREATE TABLE IF NOT EXISTS nutrition (
    nutrition_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    calories INT,
    protein_g FLOAT,
    carbs_g FLOAT,
    fat_g FLOAT
);

-- User Nutrition Table
CREATE TABLE IF NOT EXISTS user_nutrition (
    user_nutrition_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    nutrition_id INT NOT NULL,
    date_assigned DATE,
    date_completed DATE,
    notes TEXT,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (nutrition_id) REFERENCES nutrition(nutrition_id) ON DELETE CASCADE
);

-- Progress Table
CREATE TABLE IF NOT EXISTS progress (
    progress_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    date_recorded DATE NOT NULL,
    weight_kg FLOAT,
    body_fat_pct FLOAT,
    notes TEXT,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

-- Motivational Messages Table
CREATE TABLE IF NOT EXISTS motivational_messages (
    message_id INT AUTO_INCREMENT PRIMARY KEY,
    message TEXT NOT NULL,
    created_by VARCHAR(100),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- User Achievements Table
CREATE TABLE IF NOT EXISTS user_achievements (
    achievement_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    date_earned DATE,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);
