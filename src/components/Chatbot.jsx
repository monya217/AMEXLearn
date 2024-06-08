import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script.async = true;
    script.onload = () => {
      window.botpressWebChat.init({
        "composerPlaceholder": "Chat with Econ-AI",
        "botConversationDescription": "Expert Financial Advice Powered by OpenAI's GPT-3",
        "botId": "81ba4d26-71f7-40cb-a323-0c539643a3ee",
        "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
        "messagingUrl": "https://messaging.botpress.cloud",
        "clientId": "81ba4d26-71f7-40cb-a323-0c539643a3ee",
        "webhookId": "7af8f7aa-0201-4eb8-a363-8d36589f1650",
        "lazySocket": true,
        "themeName": "eggplant",
        "botName": "Econ-AI",
        "avatarUrl": "https://img.freepik.com/premium-photo/luminous-sphere-with-swirling-hues-blue-purple-orange-suggesting-motion-energy_86390-16576.jpg",
        "stylesheet": "https://webchat-styler-css.botpress.app/prod/d3aa9b6a-c913-4efd-8171-02aa2c0a5e90/v77476/style.css",
        "frontendVersion": "v1",
        "useSessionStorage": true,
        "enableConversationDeletion": true,
        "theme": "eggplant",
        "themeColor": "#2563eb",
        "allowedOrigins": []
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default Chatbot;
