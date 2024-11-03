
const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");
const { v4: uuidv4 } = require("uuid"); // To generate unique IDs


const client = new DynamoDBClient({
  region: "local", // Any region is fine for local usage
  endpoint: "http://localhost:9911", // Point to local DynamoDB instance on port 9911
  credentials: {
    accessKeyId: "dummy", // Dummy access key
    secretAccessKey: "dummy", // Dummy secret key
  },
});


async function getAll(req, res) {


        const params = {
          TableName: "Patients",
        };
      
        try {
          const command = new ScanCommand(params); // Create the ScanCommand
          const data = await client.send(command); // Send command to DynamoDB
          console.log("Data in 'Patients' table:");
          res.json(JSON.stringify(data.Items, null, 2));
        } catch (error) {
          console.error("Error scanning 'Patients' table:", error);
        }

    
}

async function getOne(req, res) {
        let dodid = req.params.dodid
        const params = {
            TableName: "Patients",
            KeyConditionExpression: "dodid = :dodid",
            ExpressionAttributeValues: {
              ":dodid": { S: dodid },
            },
          };
        
          try {
            const command = new QueryCommand(params);
            const data = await client.send(command);
            if (data.Items && data.Items.length > 0) {
              console.log("Records retrieved for dodid:", dodid);
              res.json(JSON.stringify(data.Items, null, 2));
            } else {
              console.log("No records found for the specified dodid.");
            }
          } catch (error) {
            console.error("Error querying records:", error);
          }
      
}

async function setOne(req, res) {
    let dodid = req.params.dodid
    let patient = req.body
    const record = {
        dodid: dodid, // Generate a unique dodid
        statustimestamp: Date.now(), // Current timestamp
        body: JSON.stringify(patient),
      };
    
      const params = {
        TableName: "Patients",
        Item: {
          dodid: { S: record.dodid },
          statustimestamp: { N: record.statustimestamp.toString() },
          body: { S: record.body },
        },
      };
    
      try {
        const command = new PutItemCommand(params);
        await client.send(command);
      res.json({ "works": "true"});
      } catch (error) {
        console.error("Error adding record:", error);
      }
    
}

async function create(req, res) {
    let doc = req.body
    // TODO:  Determine what data should be here and what table needs link.
   // let resp = await patientsCollection.insertOne(doc)
   // res.json(resp)
}

async function getDocs(req, res) {
    let dodid = req.params.dodid
    // TODO:  Determine what data should be here and what table needs link.
   /* let resp = await docs.findOne({dodid})
    if (!resp) {
        await docs.insertOne({
            dodid,
            docs: []
        })
        resp = {
            dodid,
            docs: []
        }
    }
    console.log(resp)
    res.json(resp.docs)
    */
}

async function setDocs(req, res) {
     // TODO:  Determine what data should be here and what table needs link.
    let dodid = req.params.dodid
   /* let incomingDocs = req.body
    console.log(incomingDocs)
    let resp = await docs.findOneAndUpdate({dodid}, {$set: {docs: incomingDocs}})
    res.json(resp) */
}

const patients = {
    getAll,
    getOne,
    setOne,
    create,
    getDocs,
    setDocs
}

module.exports = patients