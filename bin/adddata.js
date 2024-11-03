
const { v4: uuidv4 } = require("uuid"); // To generate unique IDs
const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");

 const saveDynamodb = async (key, data) => {
    const client = new DynamoDBClient({
        region: "local", // Any region is fine for local usage
        endpoint: "http://localhost:9911", // Point to local DynamoDB instance on port 911
        credentials: {
          accessKeyId: "dummy", // Dummy access key
          secretAccessKey: "dummy", // Dummy secret key
        },
      });
      
      try {
        const command = new PutItemCommand(data);
        await client.send(command);
      } catch (error) {
        console.error("Error adding data:", error);
      }
}

// Sample data to add
const sampleData = [
  {
    dodid: uuidv4(),
    statustimestamp: Date.now(),
    body: JSON.stringify({
      patientName: "John Doe",
      injuryDescription: "Fractured arm",
      treatment: "Cast applied; prescribed pain medication",
    }),
  },
  {
    dodid: uuidv4(),
    statustimestamp: Date.now(),
    body: JSON.stringify({
      patientName: "Jane Smith",
      injuryDescription: "Sprained ankle",
      treatment: "Applied ice and compression; advised rest",
    }),
  },
  {
    dodid: uuidv4(),
    statustimestamp: Date.now(),
    body: JSON.stringify({
      patientName: "Mike Johnson",
      injuryDescription: "Concussion from sports accident",
      treatment: "Conducted neurological exam; recommended 24-hour observation",
    }),
  },
];

// Function to add an item to the 'Patients' table
const addTestData = async () => {
  for (const record of sampleData) {
    const params = {
      TableName: "Patients",
      Item: {
        dodid: { S: record.dodid },
        statustimestamp: { N: record.statustimestamp.toString() },
        body: { S: record.body },
      },
    };

    saveDynamodb(params)

  }
};

// Run the function to add test data
addTestData();
