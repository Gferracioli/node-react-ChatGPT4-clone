const OpenAI = require('openai');
require("dotenv").config()
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,  // Ensure your API key is correctly set
});

module.exports = openai;