import { Bot } from './deps.ts';
import { getShibes } from './shibe_api.ts';

const token = Deno.env.get('BOT_TOKEN') as string;

console.log(token);


const bot = new Bot(token);

bot.on("text", async (ctx) => {
  const text = ctx.message?.text;

  if (text === '/shibe'){
    await ctx.reply(await getShibes());
  }
})

bot.launch();