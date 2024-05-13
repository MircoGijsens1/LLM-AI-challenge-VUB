import axios from "axios";

const startingMessages = [
  {
    role: "user",
    content:
      "In the objects dataset, how many groups based on volume can be found?",
  },
  {
    role: "assistant",
    content:
      "#start# LoadData(objects); CalculateVolume(LoadData, surface in square meters (float), height in square meters (float)); ClusterData(CalculateVolume); ClusterCount(ClusterData) #end#.",
  },
  {
    role: "user",
    content:
      "How many types of objects from the objects dataset have the same mass?",
  },
  {
    role: "assistant",
    content:
      "#start# LoadData(objects); ClusterData(LoadData, mass in kilograms (float)); ClusterCount(ClusterData) #end#.",
  },
  {
    role: "user",
    content: "Calculate the density in the objects dataset.",
  },
  {
    role: "assistant",
    content:
      "#start# LoadData(objects); CalculateVolume(LoadData, surface in square meters (float), height in square meters (float)); CalculateDensity(CalculateVolume, mass in kilograms (float)) #end#.",
  },
];

const API = {
  AddPrompt: async (new_message, context) => {
    console.log(new_message);
    const config = {
      model: "AutoMl",
      prompt: new_message,
      context: context,
      stream: false,
    };
    let response = await axios.post(
      "http://localhost:11434/api/generate",
      config
    );
    return response.data;
  },
  AddChat: async (new_message) => {
    const config = {
      model: "AutoMl",
      messages: startingMessages.concat(new_message),
      stream: false,
    };
    let response = await axios.post("http://localhost:11434/api/chat ", config);
    console.log("data_obj", response.data);
    return response.data;
  },
};
export default API;
