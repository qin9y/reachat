import { ReactElement } from 'react';

export interface ConversationSource {
  /**
   * URL of the source, if applicable
   */
  url?: string;

  /**
   * Title or description of the source
   */
  title?: string;

  /**
   * Image URL of the source, if applicable.
   */
  image?: string;
}

export interface ConversationFile {
  /**
   * Name of the file
   */
  name: string;

  /**
   * Type of the file
   */
  type?: string;

  /**
   * Size of the file
   */
  size?: number;

  /**
   * URL of the file
   */
  url?: string;
}

export interface Template {
  /**
   * Unique identifier for the template
   */
  id: string;

  /**
   * Title of the template
   */
  title: string;

  /**
   * Message to be sent when template is selected
   */
  message: string;

  /**
   * Icon to display next to the template
   */
  icon?: ReactElement;
}

export interface Conversation {
  /**
   * Unique identifier for the conversation
   */
  id: string;

  /**
   * Date and time when the conversation was created
   */
  createdAt: Date;

  /**
   * Date and time when the conversation was last updated
   */
  updatedAt?: Date;

  /**
   * The user's question or input that initiated the conversation
   */
  question: string;

  /**
   * The AI's response to the user's question
   */
  response?: string;

  /**
   * Array of sources referenced in the conversation
   */
  sources?: ConversationSource[];

  /**
   * Array of file paths or identifiers associated with the conversation
   */
  files?: ConversationFile[];
}

export interface Session {
  /**
   * Unique identifier for the session
   */
  id: string;

  /**
   * Title of the session
   */
  title?: string;

  /**
   * Date and time when the session was created
   */
  createdAt?: Date;

  /**
   * Date and time when the session was last updated
   */
  updatedAt?: Date;

  /**
   * Array of conversations within this session
   */
  conversations: Conversation[];
}
