// Import from the env
const api_url = import.meta.env.VITE_API_URL;

// A function to send the message to the server
export const getColorNameFromAPI = async (hex) => {
  //    console.log(hex);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ hex }),
  };
  const response = await fetch(`${api_url}/api/color`, requestOptions);

  if (!response.ok) {
    throw new Error("API request failed");
  }

  const data = await response.json(); // ✅ IMPORTANT

  return data.answer;
};

export const getAIRatingFromAPI = async (formData) => {
  //    console.log(hex);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };
  const response = await fetch(`${api_url}/api/rate`, requestOptions);

  if (!response.ok) {
    throw new Error("API request failed");
  }

  const data = await response.json(); // ✅ IMPORTANT

  return data.answer;
};

export const describeColorWithAI = async (formData) => {
  //    console.log(hex);
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  };
  const response = await fetch(`${api_url}/api/describe`, requestOptions);

  if (!response.ok) {
    throw new Error("API request failed");
  }

  const data = await response.json(); // ✅ IMPORTANT

  return data.answer;
};

// Export the functions to the client
const chatService = {
  getColorNameFromAPI,
  getAIRatingFromAPI,
  describeColorWithAI,
};

export default chatService;
