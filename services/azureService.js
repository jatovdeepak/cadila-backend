const axios = require('axios');
const fs = require('fs');
const { azureEndpoint, azureApiKey, modelId } = require('../config');

async function analyzeDocument(filePath) {
  const fileBuffer = fs.readFileSync(filePath);

  const pollerUrl = `${azureEndpoint}/formrecognizer/documentModels/${modelId}:analyze?api-version=2023-07-31`;

  // Start analysis
  const response = await axios.post(pollerUrl, fileBuffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Ocp-Apim-Subscription-Key': azureApiKey,
    },
    maxBodyLength: Infinity,
  });

  const operationLocation = response.headers['operation-location'];

  // Poll until result is ready
  let result;
  while (true) {
    const pollResponse = await axios.get(operationLocation, {
      headers: { 'Ocp-Apim-Subscription-Key': azureApiKey },
    });
    if (pollResponse.data.status === 'succeeded') {
      result = pollResponse.data;
      break;
    } else if (pollResponse.data.status === 'failed') {
      throw new Error('Document analysis failed.');
    }
    await new Promise((r) => setTimeout(r, 2000)); // wait 2s
  }

  return result;
}

module.exports = { analyzeDocument };
