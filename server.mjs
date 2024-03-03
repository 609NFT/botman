import express from 'express';
import OpenAI from 'openai';

const cors = require('cors');
app.use(cors());

const app = express();
const openai = new OpenAI(process.env.OPENAI_API_KEY);

app.use(express.json()); // Middleware to parse JSON bodies

app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;
  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {role: "system", content: "You are a helpful assistant."},
        {role: "user", content: userMessage},
      ],
    });
    res.json({ reply: completion.choices[0].message.content });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("An error occurred");
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
