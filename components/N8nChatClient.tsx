'use client';

import { useEffect } from 'react';
import '@n8n/chat/style.css';

export default function N8nChatClient() {
  useEffect(() => {
    // dynamically import only in browser
    import('@n8n/chat').then(({ createChat }) => {
      createChat({
        webhookUrl: 'https://rajaan8n.app.n8n.cloud/webhook/c8fdbc55-5ce3-426e-a7d6-b604290314b5/chat',
        mode: 'window',
        showWelcomeScreen: true,
        initialMessages: [
          '👋 Hello! I’m your virtual medical assistant.',
          'How can I help you today?'
        ],
        i18n: {
          en: {
            title: 'Medical Assistant 🤖',
            subtitle: 'Chat with us — we’re available 24/7.',
            footer: '',
            getStarted: 'Start New Conversation',
            inputPlaceholder: 'Type your question…',
            closeButtonTooltip: 'Close chat',
          },
        },
      });
    });
  }, []);

  return <div id="n8n-chat"></div>;
}
