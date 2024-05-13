import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Spinner from "react-bootstrap/Spinner";
import { useState } from "react";

const ChatBar = ({ isLoading, sendMessage }) => {
  const [inputText, setInputText] = useState("");
  const handleSend = () => {
    sendMessage(inputText);
    setInputText("");
  };
  return (
    <InputGroup>
      <Form.Control
        disabled={isLoading}
        size="lg"
        as="textarea"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      ></Form.Control>
      <Button onClick={handleSend} disabled={isLoading} variant="outline-dark">
        {isLoading ? (
          <Spinner animation="border" role="status"></Spinner>
        ) : (
          "Send"
        )}
      </Button>
    </InputGroup>
  );
};

export default ChatBar;
