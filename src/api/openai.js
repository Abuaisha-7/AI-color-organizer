const OPENAI_API_KEY = import.meta.env.VITE_API_OPENAI;

export async function getColorNameFromAPI(hex) {
    
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', 
        {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Authorization:`Bearer ${OPENAI_API_KEY}`
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "user",
                        content: `What would be a creative and friendly name for the color ${hex}? Just return the name, nothing else.`
                    }
                ],
                temperature: 0.7
            })
        });

        const data = await response.json();
       
        if (!response.ok) {
            console.error("Error from OpenAI", data);
            throw new Error("Failed to fetch color name")
        }

        return (
            data.choices?.[0]?.message?.content?.trim() ||
            "Unnamed Color"
          );
}