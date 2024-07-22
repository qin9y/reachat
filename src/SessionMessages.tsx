import React from 'react';
import { SessionMessage } from './SessionMessage';
import { ResponseTransformer, Conversation } from './types';

interface SessionMessagesProps {
  conversations: Conversation[];
  responseTransformers?: ResponseTransformer[];
}

export const SessionMessages: React.FC<SessionMessagesProps> = ({
  conversations,
  responseTransformers
}) => {
  return (
    <div className="conversations mt-2">
      {conversations.map((conversation) => (
        <SessionMessage
          key={conversation.id}
          question={conversation.question}
          response={conversation.response || ''}
          responseTransformers={responseTransformers}
        />
      ))}
    </div>
  );
};
