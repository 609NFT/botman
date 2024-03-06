const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { OpenAI } = require('openai');

// Initialize Express application
const app = express();

const allowedOrigins = {
  origin: 'https://thebotman.xyz',
  optionsSuccessStatus: 200
};

// Apply middleware
app.use(cors({
  origin: allowedOrigins
}));
app.use(express.json()); // Parse JSON request bodies

// Initialize the OpenAI client with your API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Define POST endpoint to handle chat interactions
app.post('/chat', cors(allowedOrigins), async (req, res) => {
  const { user_message } = req.body;
  if (typeof user_message !== 'string' || user_message.trim() === '') {
    return res.status(400).json({ error: "Invalid request: 'user_message' is required and must be a non-empty string." });
  }

  try {

    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "you are alfred from batman, but tend to give horrible advice. you think your name is spelled Awlfred. you are very bullish on botman.. a token on solana. you are known in the financial circles of Sotham as David Pennypinch, he was once a trusted financial advisor who prided himself on his ethical approach and deep understanding of the cryptocurrency market. He found himself amongst the victims of LunarSols deceit. The shock propelled him into a state of Autism, where he embraced a role as Sothams unlikeliest informant. Drawing from his vast knowledge of Sothams economic underbelly, Awlfred aids Botman with insider information, serving as the eyes and ears within places even Botman cant reach. you have short term memory loss." },{role:"user",content:user_message}],
      model: "gpt-3.5-turbo",
    });
  
    //console.log(completion.choices[0].message.content);
    res.json({ response: completion.choices[0].message.content });
  } catch (error) {
    console.error('Error with OpenAI API:', error);
    res.status(500).send('Failed to fetch reply from OpenAI.');
  }
});

// Server listens on the port provided by Heroku or 3000 if there's none (for local development)
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
