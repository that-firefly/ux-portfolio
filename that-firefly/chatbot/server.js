import express from "express";
import bodyParser from "body-parser";
import fetch from "node-fetch"; // Use "import" instead of "require"
import dotenv from "dotenv"; // ✅ For storing API keys safely

dotenv.config(); // ✅ Load environment variables

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static("public"));

// Chatbot Route
app.post("/chatbot-estela", async (req, res) => {
    try {
        const userMessage = req.body.message.toLowerCase();
        console.log("Received message:", userMessage);

        // ✅ Custom predefined responses
        const customResponses = {
            "hello": "Hey there! 😊 How can I help you?",
            "how are you": "I'm just a bot, but I'm feeling great! 🚀",
            "tell me a joke": "Why don't robots get tired? Because they recharge! 🔋😂",
            "whats my name": "I do not know but I would like to get to know you!",
            "whats this name": "I do not know but I would like to get to know you!"
        };

        // ✅ Check for predefined response
        if (customResponses[userMessage]) {
            return res.json({ reply: customResponses[userMessage] });
        }

        // ✅ If no predefined response, send request to Mistral AI
        const apiUrl = "https://api.mistral.ai/v1/chat/completions";
        const apiKey = process.env.MISTRAL_API_KEY; // ✅ Securely load API key from .env

        if (!apiKey) {
            throw new Error("Missing API key. Make sure to set MISTRAL_API_KEY in your .env file.");
        }

        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`, // ✅ Fixed Authorization header
            },
            body: JSON.stringify({
                prompt: `You are Firefly, a friendly chatbot. Keep responses short and positive.
                         User: ${userMessage} 
                         Firefly:`,
                max_tokens: 50 // ✅ Limit response size
            }),
        };

        // ✅ Fetch API response
        const response = await fetch(apiUrl, options);
        const text = await response.text(); // Get raw response
        console.log("Raw API response:", text); // Log it to debug issues

        let botMessage = "I'm not sure how to respond.";
        try {
            const data = JSON.parse(text); // ✅ Parse JSON safely
            botMessage = data.reply || (data.response && data.response.message) || botMessage;
        } catch (error) {
            console.error("Failed to parse JSON. Response might not be JSON.");
        }

        res.json({ reply: botMessage });

    } catch (error) {
        console.error("Error in chatbot API:", error);
        res.status(500).json({ reply: "Oops! Something went wrong." });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
});
