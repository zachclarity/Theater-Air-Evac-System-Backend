
aws dynamodb create-table \
    --table-name Patients \
    --attribute-definitions AttributeName=dodid,AttributeType=S AttributeName=timestamp,AttributeType=N \
    --key-schema AttributeName=dodid,KeyType=HASH AttributeName=timestamp,KeyType=RANGE \
    --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5 \
    --endpoint-url http://localhost:9911


aws dynamodb scan --table-name Patients --endpoint-url http://localhost:9911

