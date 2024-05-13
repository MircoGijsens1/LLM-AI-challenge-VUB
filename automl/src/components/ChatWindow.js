import Stack from "react-bootstrap/Stack";
import Message from "./Message";
import Form from "react-bootstrap/Form";
import { useState } from "react";
const ChatWindow = ({ data }) => {
  const [messageFormat, setMessageFormat] = useState("Formatted");
  const formatTypes = ["Formatted", "Tokens", "Full"];
  return (
    <>
      <div key={`inline-radio`} className="mb-3">
        {formatTypes.map((object) => (
          <Form.Check
            inline
            label={object}
            name="group1"
            type="radio"
            checked={object === messageFormat}
            value={object}
            onChange={() => setMessageFormat(object)}
          />
        ))}
      </div>
      <Stack gap={3}>
        {data &&
          data.map((element) => (
            <Message detailedMessage={messageFormat} message={element} />
          ))}
      </Stack>
    </>
  );
};
export default ChatWindow;
