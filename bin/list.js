// Import the DynamoDBClient and ScanCommand from AWS SDK v3
const { DynamoDBClient, ScanCommand } = require("@aws-sdk/client-dynamodb");

// Create DynamoDB client instance configured for local use
const client = new DynamoDBClient({
  region: "local", // You can set any region; it's only used for SDK setup.
  endpoint: "http://localhost:9911", // Point to local DynamoDB instance
  credentials: {
    accessKeyId: "dummy", // Dummy access key
    secretAccessKey: "dummy", // Dummy secret key
  },
});

// Function to scan and list all data in the 'Patients' table
const listPatients = async () => {
  const params = {
    TableName: "Patients",
  };

  try {
    const command = new ScanCommand(params); // Create the ScanCommand
    const data = await client.send(command); // Send command to DynamoDB
    console.log("Data in 'Patients' table:");
    console.log(JSON.stringify(data.Items, null, 2));
  } catch (error) {
    console.error("Error scanning 'Patients' table:", error);
  }
};

// Run the function
listPatients();
