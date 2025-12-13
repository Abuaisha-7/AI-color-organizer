import { chatService } from "../sevices/chat.service.js";

// public interface
export const chatController = {
  async getColorNameFromAPI(req, res) {
    // console.log(req.body)
    // fetch response from openrouter api
    try {
      const { hex } = req.body;
      //  console.log(hex)
      const answer = await chatService.getColorNameFromAPI(hex);

      // Return response
      res.send({ answer });
    } catch (error) {
      res.status(500).json({
        error: "Error communicating with OpenRouter API",
        details: error,
      });
    }
  },

  async getAIRatingFromAPI(req, res) {
    // console.log(req.body)
    // fetch response from openrouter api
    try {
      const { title, hex } = req.body;
      //  console.log(hex)
      const answer = await chatService.getAIRatingFromAPI(title, hex);

      // Return response
      res.send({ answer });
    } catch (error) {
      res.status(500).json({
        error: "Error communicating with OpenRouter API",
        details: error,
      });
    }
  },

  async describeColorWithAI(req, res) {
    // console.log(req.body)
    // fetch response from openrouter api
    try {
      const { title, hex } = req.body;
      //  console.log(hex)
      const answer = await chatService.describeColorWithAI(title, hex);

      // Return response
      res.send({ answer });
    } catch (error) {
      res.status(500).json({
        error: "Error communicating with OpenRouter API",
        details: error,
      });
    }
  },
};
