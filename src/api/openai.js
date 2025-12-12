const OPENAI_API_KEY = import.meta.env.VITE_API_OPENAI;

export async function fetchChatGptResponse(prompt, temperature) {
  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        temperature,
      }),
    }
  );

  const data = await response.json();

  if (!response.ok) {
    console.error("Error from OpenAI", data);
    throw new Error("Failed to fetch color name");
  }

  return data.choices?.[0]?.message?.content?.trim() || "";
}

export async function getColorNameFromAPI(hex) {
  const prompt = `What would be a creative and friendly name for the color ${hex}? Just return the name, nothing else.`;
  return fetchChatGptResponse(prompt, 0.7);
}

export async function getAIRatingFromAPI(title, hex) {
  const prompt = `Rate the color ${title} (${hex}) from 1 to 5 stars. Only respond with a number between 1 and 5.`;
  return fetchChatGptResponse(prompt, 0.5);
}

export async function describeColorWithAI(title, hex) {
  const prompt = `In one short sentence, describe the mood or emotional vibe of the color ${title} ${hex}. keep it under 5 words.`;
  return fetchChatGptResponse(prompt, 0.7);
}
