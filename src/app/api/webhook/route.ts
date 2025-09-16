import { NextRequest, NextResponse } from 'next/server';
import TelegramBot from 'node-telegram-bot-api';

const token = process.env.TELEGRAM_BOT_TOKEN;

if (!token) {
  throw new Error('TELEGRAM_BOT_TOKEN is not defined in environment variables');
}

const bot = new TelegramBot(token);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log('Received update:', JSON.stringify(body, null, 2));
    
    if (body.message) {
      const chatId = body.message.chat.id;
      const messageText = body.message.text;
      const firstName = body.message.from?.first_name || 'User';
      
      // Handle different commands and messages
      if (messageText === '/start') {
        await bot.sendMessage(chatId, `Hello ${firstName}! 👋\n\nWelcome to our Telegram bot! I'm here to help you.\n\nUse /help to see available commands.`);
      } else if (messageText === '/help') {
        const helpMessage = `
🤖 Available Commands:

/start - Start the bot and get a welcome message
/help - Show this help message
/about - Learn more about this bot
/ping - Check if the bot is working

You can also send me any text message and I'll echo it back to you!
        `;
        await bot.sendMessage(chatId, helpMessage);
      } else if (messageText === '/about') {
        await bot.sendMessage(chatId, `
📋 About This Bot

This is a Telegram bot built with:
• Next.js 15
• TypeScript
• node-telegram-bot-api

Created as a demonstration of integrating Telegram bots with modern web frameworks.
        `);
      } else if (messageText === '/ping') {
        await bot.sendMessage(chatId, '🏓 Pong! Bot is working correctly.');
      } else if (messageText) {
        // Echo any other text message
        await bot.sendMessage(chatId, `You said: "${messageText}"\n\n🔄 This is an echo bot - I repeat what you say!`);
      }
    }
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error processing webhook:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: 'Telegram Bot Webhook is running!',
    timestamp: new Date().toISOString()
  });
}