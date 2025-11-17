import OpenAI from "openai";

const a4fApiKey ="ddc-a4f-81a9d6553f51468aa27f1a7953c87d4d";   // <-- put your key here
const a4fBaseUrl = "https://api.a4f.co/v1";
const model = "provider-3/llama-3.2-3b";    // <-- same model you use

async function testA4F() {
  console.log("🚀 Testing A4F single request...");

  const client = new OpenAI({
    apiKey: a4fApiKey,
    baseURL: a4fBaseUrl,
  });

  try {
    const response = await client.chat.completions.create({
      model,
      messages: [
        { role: "user", content: "Say 'hello world' only." }
      ],
      max_tokens: 20,
    });

    console.log("✅ SUCCESS:");
    console.log(response.choices[0].message.content);

  } catch (err) {
    console.log("❌ FAILED:");
    console.log("Message:", err.message);
    console.log("Status:", err.response?.status);
    console.log("Response Data:", err.response?.data);
  }
}

testA4F();
