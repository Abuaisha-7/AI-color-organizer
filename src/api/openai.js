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

export async function getAIRatingFromAPI(title, hex) {
        
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
                        content: `Rate the color ${title} (${hex}) from 1 to 5 stars. Only respond with a number between 1 and 5.`
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

export async function describeColorWithAI (title, hex) {

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
                        content: `Describe the emotional mood or vibe of the color ${title} ${hex} in one short sentence and only return the mood.`
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
            ""
          );
}