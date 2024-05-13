import API from "../API/OllamaApi";

const Ollama = {
  addPrompt: async (messages) => {
    console.log("prev", messages);
    let context_object = messages.filter(
      (element) => element.role === "assistant"
    );
    let new_messages_obj = messages.filter(
      (element) => element.role === "user"
    );
    let context =
      context_object.length === 0 ? [] : context_object.pop().context;
    let new_messages =
      new_messages_obj.length === 0 ? "" : new_messages_obj.pop().content;
    let answer = await API.AddPrompt(new_messages, context);
    console.log("response", answer);
    return {
      role: "assistant",
      content: answer.response,
      context: answer.context,
    };
  },
  addChat: async (messages) => {
    let answer = await API.AddChat(messages);
    return answer.message;
  },
};

export default Ollama;
