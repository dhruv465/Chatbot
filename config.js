
// Config starter code
import { Global } from "@emotion/react";
import { createChatBotMessage } from "react-chatbot-kit";
const botName = 'Niri Chatbot';
const config = {
  initialMessages: [createChatBotMessage(`Hi! I'm ${botName}`) || ('How can I help you?'),
  
  createChatBotMessage(
    "Here's a quick overview of what I can help you with. You can also type in.",
    {
    
      withAvatar: false,
      delay: 1000,
      widget: "overview"
    }
  )],
  botName:botName,
};

export default config