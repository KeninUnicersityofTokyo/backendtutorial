const axios = require('axios');

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    console.log("Invalid method:", req.method);
    return res.status(405).json({ error: "Method not allowed" });
  }

  const input = req.body.input;
  if (!input) {
    console.log("Missing input data in request body:", req.body);
    return res.status(400).json({ error: "Input data is required" });
  }

  const API_KEY = process.env.GEMINI_API_KEY;
  const API_URL = 'https://api.gemini.com/v1/your-endpoint'; // Replace with the actual endpoint

  try {
    const response = await axios.post(API_URL, { input }, {
      headers: { Authorization: `Bearer ${API_KEY}` }
    });
    res.status(200).json(response.data);
  } catch (error) {
    console.log("Error calling external API:", error.message);
    res.status(500).json({ error: "Failed to fetch data from the external API" });
  }
};

module.exports = handler;
