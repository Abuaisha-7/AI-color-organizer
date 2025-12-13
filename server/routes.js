import express from "express";
import { chatController } from "./controllers/chat.controller.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello, World!");
});

router.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from the API!" });
});

// post request
router.post("/api/color", chatController.getColorNameFromAPI);
router.post("/api/rate", chatController.getAIRatingFromAPI);
router.post("/api/describe", chatController.describeColorWithAI);

// export router
export default router;
