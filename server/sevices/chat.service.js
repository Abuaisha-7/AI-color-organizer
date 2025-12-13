export const chatService = {
  // Add service methods here

  async fetchChatGptResponse(prompt, temperature) {
    const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY;

    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${OPENROUTER_API_KEY}`,
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
    //   console.log(data)
    if (!response.ok) {
      console.error("Error from OpenAI", data);
      throw new Error("Failed to fetch color name");
    }

    return data.choices?.[0]?.message?.content?.trim() || "";
  },

  async getColorNameFromAPI(hex) {
    const prompt = `What would be a creative and friendly name for the color ${hex}? Just return the name, nothing else.`;
    return this.fetchChatGptResponse(prompt, 0.7);
  },

  async getAIRatingFromAPI(title, hex) {
    const prompt = `Rate the color ${title} (${hex}) from 1 to 5 stars. Only respond with a number between 1 and 5.`;
    return this.fetchChatGptResponse(prompt, 0.5);
  },

  async describeColorWithAI(title, hex) {
    const prompt = `In one short sentence, describe the mood or emotional vibe of the color ${title} ${hex}. keep it under 5 words.`;
    return this.fetchChatGptResponse(prompt, 0.7);
  },
};
