import parse from "html-react-parser";
import token_data from "../TokenFile";

const Message = ({ message, detailedMessage }) => {
  /*const parseMessage = () => {
    console.log(detailedMessage);
    if (message.role === "assistant") {
      if (detailedMessage === true) {
        return parse(message.content.replaceAll("\\\n", "<br />"));
      } else {
        let tokenList = [];
        let message_list = message.content.split(";");
        message_list.forEach((element, index) => {
          if (index === 0 && element.includes(":")) {
            element = element.substring(element.indexOf(":")).remove(":");
          }
          let tokens = element.split("-");
          for (var key of Object.keys(token_data)) {
            if (tokens[1].includes(key) && !tokenList.includes(key)) {
              tokenList.push(key);
            }
          }
          /*let tokensDetailed = tokens[1].trim().split(" ")[0].trim();
          if (
            tokensDetailed &&
            tokensDetailed in token_data &&
            !tokenList.includes(tokensDetailed)
          ) {
            tokenList.push(tokensDetailed);
          }*/

  /*if (!tokenList.includes(tokens[0].trim())) {
            tokenList.push(tokens[0].trim());
          }
        });
        return tokenList.join("; ");
      }
    } else {
      return message.content;
    }
  };*/
  const parseMessageV2 = () => {
    if (message.role === "user") {
      return message.content;
    } else {
      let parsed_message = message.content.substring(
        message.content.indexOf("start#") + 6,
        message.content.indexOf("#end")
      );
      if (detailedMessage === "Formatted") {
        return parsed_message;
      } else if (detailedMessage === "Tokens") {
        let token_list = parsed_message.split(";");
        return token_list
          .map((instruction) =>
            instruction.substring(0, instruction.indexOf("("))
          )
          .join("; ");
      } else if (detailedMessage === "Full") {
        return message.content;
      }
    }
  };
  return (
    <div
      className="d-flex flex-column p-2"
      style={{
        backgroundColor: message.role === "user" ? "blue" : "gray",
        color: "white",
        borderRadius: "15px",
      }}
    >
      <div>
        <b>
          <u>{message.role.charAt(0).toUpperCase() + message.role.slice(1)}</u>
        </b>
      </div>
      <div>{parseMessageV2()}</div>
    </div>
  );
};
export default Message;
