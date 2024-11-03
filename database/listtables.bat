aws dynamodb list-tables --endpoint-url http://localhost:9911

aws dynamodb scan --table-name Patients --endpoint-url http://localhost:9911

aws dynamodb describe-table --table-name Patients --endpoint-url http://localhost:9911

{
    "Table": {
        "AttributeDefinitions": [
            {
                "AttributeName": "dodid",
                "AttributeType": "S"
            },
            {
                "AttributeName": "statustimestamp",
                "AttributeType": "N"
            }
        ],
        "TableName": "Patients",
        "KeySchema": [
            {
                "AttributeName": "dodid",
                "KeyType": "HASH"
            },
            {
                "AttributeName": "statustimestamp",
                "KeyType": "RANGE"
            }
        ],
        "TableStatus": "ACTIVE",
        "CreationDateTime": "2024-11-03T09:29:51.986000-06:00",
        "ProvisionedThroughput": {
            "LastIncreaseDateTime": "1969-12-31T18:00:00-06:00",
            "LastDecreaseDateTime": "1969-12-31T18:00:00-06:00",
            "NumberOfDecreasesToday": 0,
            "ReadCapacityUnits": 5,
            "WriteCapacityUnits": 5
        },
        "TableSizeBytes": 0,
        "ItemCount": 0,
        "TableArn": "arn:aws:dynamodb:ddblocal:000000000000:table/Patients",
        "DeletionProtectionEnabled": false
    }
}
