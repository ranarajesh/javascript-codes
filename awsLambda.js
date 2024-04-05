console.log("Calling fetch  of AWS call");
const lambdaUrl = "https://qvfdj4ihch5jp2uftlht45hzxu0ylugx.lambda-url.us-east-1.on.aws/?param=date"; // Replace with your actual Lambda URL
const payload = { // Replace with your desired payload data
  key1: "value1",
  key2: "value2"
};

fetch(lambdaUrl, {
  method: 'POST', // Adjust method if needed (e.g., GET, PUT)
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(payload)
})
.then(response => {
  if (!response.ok) {
    throw new Error(`Error calling Lambda: ${response.statusText}`);
  }
  return response.json();
})
.then(data => {
  console.log('Response from Lambda:', data);
  // Process the response data here
})
.catch(error => {
  console.error('Error:', error);
});
