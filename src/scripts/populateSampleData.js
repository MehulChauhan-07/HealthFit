const connectDB = require("../config/database");
const populateDatabase = require("../config/sampleData");

const runPopulation = async () => {
  try {
    // Connect to database
    await connectDB();

    // Populate sample data
    await populateDatabase();

    console.log("Database population completed successfully!");
    process.exit(0);
  } catch (error) {
    console.error("Error populating database:", error);
    process.exit(1);
  }
};

runPopulation();
