import React, { useEffect } from "react";

const chatBot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.botpressWebChat.init({
        composerPlaceholder: "Chat with Chanakya",
        botConversationDescription:
          "This is an AI Assistant for navigating APH",
        botId: "c7a18a17-2b63-4e85-af60-cb405176d988",
        hostUrl: "https://cdn.botpress.cloud/webchat/v1",
        messagingUrl: "https://messaging.botpress.cloud",
        clientId: "c7a18a17-2b63-4e85-af60-cb405176d988",
        webhookId: "34400aa0-b4f1-490d-96b6-9fb3745aba2c",
        lazySocket: true,
        themeName: "prism",
        botName: "Chanakya",
        avatarUrl:
          "https://cracku.in/latest-govt-jobs/wp-content/uploads/2021/02/AICTE-Logo.jpg",
        frontendVersion: "v1",
        useSessionStorage: true,
        theme: "prism",
        themeColor: "#2563eb",
      });
    };
  }, []);

  return <div id="webchat"></div>;
};

export default chatBot;
