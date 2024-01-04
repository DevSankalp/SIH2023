import React, { useEffect } from "react"

const chatBot = () => {
  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js"
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      window.botpressWebChat.init({
        composerPlaceholder: "Chat with Chanakya",
        botConversationDescription:
          "This is an AI Assistant for navigating APH",
        botId: "6977896e-d3e7-4b1b-8049-2e5256173d53",
        hostUrl: "https://cdn.botpress.cloud/webchat/v1",
        messagingUrl: "https://messaging.botpress.cloud",
        clientId: "6977896e-d3e7-4b1b-8049-2e5256173d53",
        webhookId: "7bc27bd4-ed12-4c3b-b11c-25f948c14996",
        lazySocket: true,
        themeName: "prism",
        botName: "Chanakya",
        avatarUrl:
          "https://vectorseek.com/wp-content/uploads/2023/09/AICTE-Logo-Vector.svg-.png",
        frontendVersion: "v1",
        useSessionStorage: true,
        theme: "prism",
        themeColor: "#2563eb",
      })
    }
  }, [])

  return <div id="webchat"></div>
}

export default chatBot
