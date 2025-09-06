require('dotenv').config();

module.exports = {
  mongoUri: process.env.MONGO_URI || 'mongodb://localhost:27017/azure_docs',
  azureEndpoint: process.env.AZURE_ENDPOINT,
  azureApiKey: process.env.AZURE_API_KEY,
  modelId: process.env.AZURE_MODEL_ID,
};
