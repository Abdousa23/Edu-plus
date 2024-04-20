import {create} from 'zustand';





interface ChatStore {

  selectedChat: selectedChat | null;
  setSelectedChat: (selectedChat: selectedChat | null) => void;
  messages: MessageType[];
  setMessages: (messages: MessageType[]) => void;

}

const useChat = create<ChatStore>((set) => ({
  
  selectedChat: null,
  setSelectedChat: (selectedChat) => set({ selectedChat }),



  messages: [],
  setMessages: (messages) => set({ messages }),
}));

export default useChat;
