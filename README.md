# Installing Ollama

To try the model and try some queries you first need to install Ollama. You can find the instructions here: https://github.com/ollama/ollama.

# Installing mistral

To use a model you first download the mistrall model to your local computer using the following command in the terminal of your local machine.

- ollama run mistral

# Creating a Modelfile

Then you should open the terminal in the attached project map and do following command.

- ollama create AutoML -f ./Modelfile

This will create the model that we will use.

# Using the solution

Now you can do two things. You can eather use the inbuild terminal by using the following command.

- ollama run AutoML

You can then type your queries and give feedback like the AutoML system can do.

Or you can, because sometimes the output of the terminal will not be formatted correctly (extra info, etc.), use the react react app that is styled like a chat app where you can give queries and get back the AutoML tokens in the format you desire. You can find the react app in the map automl.

# Response format

You have three formats which we will show using following query:

- Formatted: Here you see the tokens and there parameters. The parameters are the input parameters used by the token.

- Tokens: Here you see the tokens without parameters.

- Full: Here you see the full response from the model.

# Using the react app

To use the react app make sure that Ollama is active by using the following command in the terminal:

- Ollama serve

And use

- npm install (first time)
- npm start

To start the react app.

# Limitations

Adding messages to the Modelfile will work fine in terminal but not in the react app.

To add messages in the react app you need to go to automl > src > API > OllamaApi.js
and add examples to the StartingMessages Array.

Also try to refresh the model after every query to get optimale results.
