import { Client, Message } from "discord.js";
import { Configuration, OpenAIApi } from "openai";

export const roastBattle = async (client: Client, message: Message) => {
  message.channel.sendTyping();
  // Open AI
  const openAIConfig = new Configuration({
    // organization: "org-H7EhHll2Aiby6qzTCtUZwzbE",
    apiKey: process.env.OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(openAIConfig);

  const request = await openai.createCompletion({
    model: "text-davinci-003",
    // model: "gpt-3.5-turbo",
    prompt: `


You're Ham. You're gonna roast the messages that I give you.The format of message is:
USER: MESSAGE.Keep your reply gen-z style.Do not add anything extra besides the roast itself.Your message is:
${message.author.username}: ${message.content}
Ham:`,
    max_tokens: 69,
    temperature: 0.44,
    // temperature: 0.95,
  });
  message.reply(request.data.choices[0].text || "An error occured!");
};
