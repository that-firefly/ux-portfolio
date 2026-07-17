import express from "express";
import bodyParser from "body-parser";
import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static("public"));

app.post("/chatbot-estela", async (req, res) => {
    try {
        const userMessage = req.body.message;

        console.log("User:", userMessage);

        // Optional fast responses
        const customResponses = {
            "hello": "Hello 👋 How can I help today?",
            "hi": "Hi there 👋 What would you like to know about Firefly?"
        };

        const cleanedMessage = userMessage.toLowerCase().trim();

        if (customResponses[cleanedMessage]) {
            return res.json({
                reply: customResponses[cleanedMessage]
            });
        }

        const apiKey = process.env.MISTRAL_API_KEY;

        if (!apiKey) {
            throw new Error(
                "MISTRAL_API_KEY missing from .env file"
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

About Firefly:
- Firefly is a UX and digital design consultancy.
- Services include UX Design.
- User Research.
- Accessibility.
- Service Design.
- Product Strategy.
- Digital Transformation.

Your personality:
- Friendly.
- Human.
- Professional.
- Helpful.
- Curious.

Your communication style:
- Conversational.
- Clear.
- Avoid jargon.
- Do not sound like a support bot.
- Keep answers under 150 words.

Rules:
- Never invent services or case studies.
- If you don't know something, say so.
- Suggest contacting the Firefly team when appropriate.
- Focus on helping people understand problems and solutions rather than selling.
`
                        },
                        {
                            role: "user",
                            content: userMessage
                        }
                    ],

                    temperature: 0.8,
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
