export interface Message {
  id: string;
  content: string;
  senderId: string;
  timestamp: string;
}

export interface User {
  id: string;
  name: string;
  avatar?: string;
  online?: boolean;
}
