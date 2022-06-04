import { Bot } from './deps.ts';
import { getShibes } from './shibe_api.ts';

const token = Deno.env.get('BOT_TOKEN') as string;

console.log(token);

const bot = new Bot(token);

// deno telegram 

// bot.on("text", async (ctx) => {
//   const text = ctx.message?.text;

//   if (text === '/shibe'){
//     await ctx.reply(await getShibes());
//   }
// })

// bot.launch();

// deno grammy
bot.command("start", (ctx) => ctx.reply("Welcome, send me a photo!"));
bot.on("message:text", (ctx) => ctx.reply("That is text not a photo!"));
bot.on("message:photo", (ctx) => ctx.reply("Nice photo, is that you?"));
bot.on(
  "edited_message",
  (ctx) => 
    ctx.reply("Ha! Gotcha! You just edited this!", {
      reply_to_message_id: ctx.editedMessage.message_id,
    }),
);

bot.start();