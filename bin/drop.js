// Import the DynamoDBClient and DeleteTableCommand from AWS SDK v3
const { DynamoDBClient, DeleteTableCommand } = require("@aws-sdk/client-dynamodb");

// Create DynamoDB client instance configured for local use with dummy credentials
const client = new DynamoDBClient({
  region: "local", // Any region is fine for local usage
  endpoint: "http://localhost:9911", // Point to local DynamoDB instance
  credentials: {
    accessKeyId: "dummy", // Dummy access key
    secretAccessKey: "dummy", // Dummy secret key
  },
});

// Function to delete the 'Patients' table
const deletePatientsTable = async () => {
  const params = {
    TableName: "Patients",
  };

  try {
    const command = new DeleteTableCommand(params);
    const data = await client.send(command);
    console.log("Table deleted successfully:", data);
  } catch (error) {
    console.error("Error deleting table:", error);
  }
};

// Run the function to delete the table
deletePatientsTable();
