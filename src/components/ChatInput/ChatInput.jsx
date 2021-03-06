import { useChat } from 'context';
import { useState, useRef } from 'react';

import { Icon } from 'semantic-ui-react';
import { sendMessage } from 'react-chat-engine';
import { ImageUpload } from 'components';

export const ChatInput = () => {
  const { chatConfig, selectedChat } = useChat();
  const [chatInputText, setChatInputText] = useState('');
  const [imageModelOpen, setImageModelOpen] = useState(false);

  const inputRef = useRef(null);
  const [image, setImage] = useState();

  const sendChatMessage = () => {
    if (selectedChat && chatInputText) {
      setChatInputText('');
      sendMessage(chatConfig, selectedChat.id, {
        text: chatInputText,
        files: [],
      });
    }
  };

  const onFileAttach = file => {
    setImage(file);
    setImageModelOpen(true);
  };
  return (
    <>
      <div className="chat-controls">
        <div
          onClick={() => {
            const input = inputRef.current;
            if (input) {
              input.value = '';
              input.click();
            }
          }}
          className="attachment-icon"
        >
          <Icon name="attach" color="grey" />
        </div>

        <input
          value={chatInputText}
          className="chat-input"
          placeholder="send a message"
          onKeyPress={e => {
            if (e.key === 'Enter') {
              sendChatMessage();
            }
          }}
          onChange={e => setChatInputText(e.target.value)}
        />

        <div onClick={sendChatMessage} className="send-message-icon">
          <Icon name="send" color="green" />
        </div>
      </div>

      <input
        type="file"
        ref={inputRef}
        className="file-input"
        accept="image/jpeg,image/png"
        onChange={e => {
          const file = e.target?.files?.[0];
          if (file) {
            onFileAttach(file);
          }
        }}
      />
      {imageModelOpen && !!image && (
        <ImageUpload
          file={image}
          onSubmit={() => {
            sendMessage(
              chatConfig,
              selectedChat.id,
              { text: chatInputText, files: [image] },
              () => {
                setImage(null);
                setChatInputText('');
              },
            );
          }}
          close={() => setImageModelOpen(false)}
        />
      )}
    </>
  );
};
