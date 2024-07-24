import { Button } from "@chakra-ui/react";
import { Route } from "react-router-dom";
import HomePage from "./Pages/Homepage";
import ChatPage from "./Pages/ChatPage";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Route path="/" component={HomePage} exact />
      <Route path="/chats" component={ChatPage} />
    </div>
  );
}

export default App;
