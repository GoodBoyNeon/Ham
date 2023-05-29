import "dotenv/config";

import { Client, Message } from "discord.js";
import { roastBattle } from "./lib/roastBattle";

const client = new Client({
  intents: ["Guilds", "GuildMessages", "MessageContent", "GuildMembers"],
});

client.on("ready", () => {
  console.log("Bot is online");
});

client.on("messageCreate", (message: Message) => {
  if (message.author.bot) return;
  // const roastChannelId = "1093410755795222559";

  const roastChannelId = "1112653573428367382";

  if (message.channelId === roastChannelId) {
    roastBattle(client, message);
  }
});

client.login(process.env.TOKEN);
