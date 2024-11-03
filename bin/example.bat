# POST request to create a new patient
curl -X POST https://localhost:9911/patients/1001 
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_AUTH_TOKEN" \
  -d '{
    "dodid": "P123",
    "injury": "xxx"
    },
    "medicalHistory": []
}'

# Alternatively, using a data file:
curl -X POST https://your-api-gateway-url.amazonaws.com/prod/patients \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_AUTH_TOKEN" \
  -d @patient-data.json

# Example patient-data.json file structure:
# {
#   "patientId": "P123",
#   "firstName": "John",
#   "lastName": "Doe",
#   ...
# }