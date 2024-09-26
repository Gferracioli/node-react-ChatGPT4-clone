const inputPrompt = require("../models/input-prompt");
const openai = require("../configs/openai");

module.exports = {
  async sendText(req, res) {
    const inputModel = new inputPrompt(req.body);

    try {
      // Use the correct OpenAI API method for text completion
      const response = await openai.chat.completions.create({
        model: "gpt-4", 
        messages: [{ role: "user", content: inputModel.prompt }],  // Assuming `inputModel.prompt` holds the prompt text
      });

      return res.status(200).json({
        success: true,
        data: response.choices[0].message.content,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        error: error.response
          ? error.response.data
          : 'There was an issue on the server',
      });
    }
  },
};