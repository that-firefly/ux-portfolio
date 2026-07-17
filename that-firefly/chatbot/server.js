import express from "express";
import bodyParser from "body-parser";
import fetch from "node-fetch";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

const websiteContent = fs.readFileSync(
    "./firefly-content.txt",
    "utf8"
);

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/that-firefly/chatbot/public/chatbot-estela", async (req, res) => {
    try {
        const userMessage = req.body.message;

        console.log("User:", userMessage);

        const apiKey = process.env.MISTRAL_API_KEY;

        if (!apiKey) {
            throw new Error(
                "MISTRAL_API_KEY not found in .env file"
            );
        }

        const response = await fetch(
            "https://api.mistral.ai/v1/chat/completions",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`
                },
                body: JSON.stringify({
                    model: "mistral-small-latest",
                    messages: [
                        {
                            role: "system",
                            content: `
You are Finn, Firefly's virtual UX guide.

Use the information below when answering questions.

${websiteContent}

Your personality:
- Friendly
- Helpful
- Professional
- Human
- Curious

Communication style:
- Conversational
- Clear
- Concise
- Avoid jargon
- Never sound robotic

Rules:
- Only answer using information provided.
- Never invent facts.
- If you don't know something, say so.
- Suggest contacting Firefly when appropriate.
- Keep responses under 150 words.
`
                        },
                        {
                            role: "user",
                            content: userMessage
                        }
                    ],
                    temperature: 0.7,
                    max_tokens: 200
                })
            }
        );

        const data = await response.json();

        console.log(
            "Mistral Response:",
            JSON.stringify(data, null, 2)
        );

        const botMessage =
            data?.choices?.[0]?.message?.content ||
            "Sorry, I couldn't generate a response.";

        res.json({
            reply: botMessage
        });

    } catch (error) {
        console.error("Chatbot Error:", error);

        res.status(500).json({
            reply: "Sorry, something went wrong."
        });
    }
});

app.listen(port, () => {
    console.log(
        `🚀 Firefly chatbot running at http://localhost:${port}`
    );
});
