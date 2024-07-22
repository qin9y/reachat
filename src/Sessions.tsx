import { FC } from 'react';
import { ResponseTransformer, Session } from './types';
import { SessionsList } from './SessionsList';
import { SessionMessages } from './SessionMessages';

export interface SessionsProps {
  /**
   * The type of prompt to display. Companion prompts are smaller and are 
   * meant to be displayed alongside other content. Full prompts are larger 
   * and are meant to be displayed on their own.
   */
  viewType: 'companion' | 'full';

  /**
   * The list of sessions to display.
   */
  sessions: Session[];

  /**
   * The ID of the currently active session.
   */
  activeSessionId?: string;

  /**
   * Array of transformer functions to apply to the response.
   */
  responseTransformers?: ResponseTransformer[];

  /**
   * Callback function to handle when a session is selected.
   */
  onSelectSession?: (sessionId: string) => void;

  /**
   * Callback function to handle when a session is deleted.
   */
  onDeleteSession?: (sessionId: string) => void;
}

export const Sessions: FC<SessionsProps> = ({
  viewType,
  sessions,
  onSelectSession,
  onDeleteSession,
  isLoading,
  activeSessionId,
  responseTransformers = []
}) => {
  return (
    <div className={`sessions-container ${viewType === 'companion' ? 'p-4' : 'p-8'}`}>
      {isLoading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : (
        <div>
          <SessionsList
            sessions={sessions}
            activeSessionId={activeSessionId}
            onSelectSession={onSelectSession}
            onDeleteSession={onDeleteSession}
          />
          {activeSessionId && (
            <div className="active-session mt-4">
              {sessions
                .filter(session => session.id === activeSessionId)
                .map(session => (
                  <div key={session.id}>
                    <h2 className="text-2xl font-bold">{session.title}</h2>
                    <SessionMessages
                      conversations={session.conversations}
                      responseTransformers={responseTransformers}
                    />
                  </div>
                ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};