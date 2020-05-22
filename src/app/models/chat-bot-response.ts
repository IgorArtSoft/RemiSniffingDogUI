import { ChatNode } from './chat-node';

export interface ChatBotResponse{
    
    chatNodes?: ChatNode[];
    allInformationRetrieved: boolean;
}