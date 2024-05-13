import ChatBar from "./ChatBar";
import Container from "react-bootstrap/Container";
import ChatWindow from "./ChatWindow";
import { useEffect, useState } from "react";
import Ollama from "../services/Ollama";

const testData = [
  {
    role: "user",
    content: "why is the sky blue?",
  },
  {
    role: "assistant",
    content: "due to rayleigh scattering.",
  },
  {
    role: "user",
    content: "how is that different than mie scattering?",
  },
];
const InputWindow = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    //setData(testData);
  }, []);
  const sendMessage = async (message) => {
    setIsLoading(true);
    data.push({ role: "user", content: message });
    setData(data);
    let answer = await Ollama.addChat(data);
    data.push(answer);
    setData(data);
    setIsLoading(false);
  };
  return (
    <Container className="h-100 p-5 d-flex flex-column">
      <div className="flex-grow-1 border" style={{ overflowY: "scroll" }}>
        <ChatWindow data={data} />
      </div>
      <div>
        <ChatBar sendMessage={sendMessage} isLoading={isLoading} />
      </div>
    </Container>
  );
};
export default InputWindow;
