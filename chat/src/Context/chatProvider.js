import { createContext, useContext } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import React from "react";
const ChatContext = createContext();
const ChatProvider = ({ children }) => {
  const [user, setUser] = React.useState();
  const [selectedChat, setSelectedChat] = React.useState();
  const [chats, setChats] = React.useState([]);
  const history = useHistory();
  React.useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);

    if (!userInfo) {
      history?.push("/");
    }
  }, [history]);
  return (
    <ChatContext.Provider
      value={{ user, setUser, selectedChat, setSelectedChat, chats, setChats }}
    >
      {children}
    </ChatContext.Provider>
  );
};
export const ChatState = () => {
  return useContext(ChatContext);
};

export default ChatProvider;
