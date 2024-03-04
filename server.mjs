import express from 'express';
import dotenv from 'dotenv';
import OpenAI from 'openai'; // Adjusted import
import cors from 'cors';

// Use CORS middleware to allow all origins
app.use(cors());


dotenv.config();

const app = express();
app.use(express.json());

// Adjusted OpenAI client initialization
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const openaiApiKey = process.env.OPENAI_API_KEY;

const headers = {
  'Authorization': `Bearer ${openaiApiKey}`,
  'OpenAI-Beta': 'assistants=v1'
};

app.post('/chat', async (req, res) => {
  const { message } = req.body;

  try {
    // Adjusted API call
    const completion = await openai.createCompletion({
      model: "text-davinci-003", // Make sure this is the model you intend to use
      prompt: `You are Alfred, Batman's assistant. ${message}`,
      max_tokens: 150,
      temperature: 0.7,
    });

    res.json({ reply: completion.data.choices[0].text.trim() });
  } catch (error) {
    console.error('Error with OpenAI API:', error);
    res.status(500).send('Failed to fetch reply from OpenAI.');
  }
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
