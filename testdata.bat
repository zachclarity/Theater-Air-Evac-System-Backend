@echo off
REM create_patient_params.bat - Script to add a patient with parameters
REM Usage: create_patient_params.bat P123 "John" "Doe" "john@email.com"

REM Set your API endpoint
set API_URL="http://localhost:9911/patients/101"

REM Check if required parameters are provided
if "%~1"=="" goto usage

REM Create temporary JSON file with parameters
echo {^
    "patientId": "%~1"^
} > patient.json

REM Send POST request using curl
curl -X POST http://localhost:9911/patients/101  -H "Content-Type: application/json" -H "Authorization: Bearer %AUTH_TOKEN%" -d @patient.json

REM Delete temporary JSON file
REM del patient.json
goto end

:usage
echo Usage: %0 patientId firstName lastName email [dateOfBirth] [phone] [street] [city] [state] [zipCode]
echo Example: %0 P123 "John" "Doe" "john@email.com" "1990-01-01" "+1234567890" "123 Main St" "Seattle" "WA" "98101"

:end
pause