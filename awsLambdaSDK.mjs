//const fetch = require('node-fetch');
//const fetch = require('node-fetch-cjs');
import fetch from 'node-fetch';
import AWS from 'aws4'; 

const functionUrl = "https://qvfdj4ihch5jp2uftlht45hzxu0ylugx.lambda-url.us-east-1.on.aws/?param=date"; // Replace with your actual Lambda URL
const region = "us-east-1"; // Replace with your actual region

async function callLambdaWithFunctionUrl(payload) {
  try {
    const signedRequest = AWS.sign({
      host: functionUrl.split("//")[1].split("/")[0],
      path: functionUrl.split("//")[1].split("/")[1],
      service: "execute-api",
      region,
      accessKeyId,
      secretAccessKey,
      method: "GET", // Adjust method if needed
      headers: {
        "Content-Type": "application/json"
      },
      //body: JSON.stringify(payload)
    });

    const response = await fetch(signedRequest.url, signedRequest.headers);

    if (!response.ok) {
      throw new Error(`Error calling Lambda: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Example usage
const myPayload = { message: "Hello from Javascript!" };
callLambdaWithFunctionUrl(myPayload)
  .then(data => {
    console.log('Response from Lambda:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
