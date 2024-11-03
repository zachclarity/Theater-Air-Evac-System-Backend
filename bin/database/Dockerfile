# Use Amazon's official DynamoDB Local image
FROM amazon/dynamodb-local

# Expose DynamoDB Local on port 9911
EXPOSE 9911

# Start DynamoDB Local and bind it to port 9911
CMD ["-jar", "DynamoDBLocal.jar", "-port", "9911"]
