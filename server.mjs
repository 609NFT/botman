// Import necessary packages
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

// Assuming the correct import based on your setup
// This may need adjustment based on the actual OpenAI Node.js SDK usage
import { OpenAI } from 'openai';

// Load environment variables from .env file
dotenv.config();

// Initialize Express application
const app = express();

// Apply middleware
app.use(cors()); // Enable CORS to handle cross-origin requests
app.use(express.json()); // Parse JSON request bodies

// Initialize the OpenAI client with your API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Define POST endpoint to handle chat interactions
app.post('/chat', async (req, res) => {
  const { user_message } = req.body;

  try {
    // Example: Creating a thread and interacting with the OpenAI Assistant
    // These are conceptual steps. Replace with actual SDK calls and handle responses appropriately.

    // Step 1: Create a Thread
    // Assuming a method exists in the SDK for this, replace with the actual method call
    const thread = await openai.beta.threads.create();
    const thread_id = thread.id;

    /* Assuming a method exists in the SDK for this, replace with the actual method call
    const threadMessages = await openai.beta.threads.messages.create(
      thread_id,
      { role: "user", content: "hello" }
    );*/

    //console.log(threadMessages);

    /*const run = await openai.beta.threads.runs.create(
      thread_id,
      { assistant_id: "asst_kHzsrTJRHJjczOybUz0qLXci" }
    );*/

    const run = await openai.beta.threads.createAndRun({
      assistant_id: "asst_kHzsrTJRHJjczOybUz0qLXci",
      thread: {
        messages: [
          { role: "user", content: "Explain deep learning to a 5 year old." },
        ],
      },
    });

    console.log(run);
  } catch (error) {
    console.error('Error with OpenAI API:', error);
    res.status(500).send('Failed to fetch reply from OpenAI.');
  }
});

// Server listens on port 3001
const port = 3001;
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
