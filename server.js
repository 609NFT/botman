require('dotenv').config();
const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());
app.use(express.static('build')); // Serve static files if you're also serving an SPA

const PORT = process.env.PORT || 3000;

// Route to handle chat messages
app.post('/api/chat', async (req, res) => {
  const userMessage = req.body.message;
  
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/messages',
      {
        model: "gpt-3.5-turbo", // Adjust model as needed
        messages: [
          { role: "system", content: "You are a helpful assistant." },
          { role: "user", content: userMessage },
        ],
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    const aiResponse = response.data.data.messages.at(-1).content; // Get the last message, which should be the assistant's response
    res.json({ message: aiResponse });
  } catch (error) {
    console.error('Failed to fetch response from OpenAI:', error);
    res.status(500).send('Failed to process the request');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
