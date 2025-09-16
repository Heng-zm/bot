# Telegram Bot Setup Instructions

Your Telegram bot with Next.js has been successfully created! Follow these step-by-step instructions to get it running.

## 🤖 Step 1: Create a Telegram Bot

1. **Open Telegram** and search for [@BotFather](https://t.me/botfather)
2. **Start a chat** with BotFather and send `/start`
3. **Create a new bot** by sending `/newbot`
4. **Choose a name** for your bot (e.g., "My Awesome Bot")
5. **Choose a username** for your bot (must end with 'bot', e.g., "myawesome_bot")
6. **Copy the bot token** that BotFather provides (it looks like: `1234567890:ABCdefGhIJKlmNoPQRsTuVwXyZ`)

## ⚙️ Step 2: Configure Environment Variables

1. **Open** the `.env.local` file in your project root
2. **Replace** `YOUR_BOT_TOKEN_HERE` with your actual bot token:
   ```env
   TELEGRAM_BOT_TOKEN=1234567890:ABCdefGhIJKlmNoPQRsTuVwXyZ
   TELEGRAM_WEBHOOK_URL=https://your-domain.com/api/webhook
   ```

## 🚀 Step 3: Development Setup (Testing Locally)

For local development, you need a public URL for Telegram to send webhooks to your local server.

### Option A: Using ngrok (Recommended)

1. **Install ngrok** from https://ngrok.com/
2. **Start your Next.js development server**:
   ```bash
   npm run dev
   ```
3. **In a new terminal**, expose your local server:
   ```bash
   ngrok http 3000
   ```
4. **Copy the ngrok URL** (looks like: `https://abc123.ngrok.io`)
5. **Update `.env.local`** with your ngrok URL:
   ```env
   TELEGRAM_WEBHOOK_URL=https://abc123.ngrok.io/api/webhook
   ```

### Option B: Using other tunneling services

You can also use:
- **Cloudflare Tunnel**: `cloudflared tunnel --url localhost:3000`
- **LocalTunnel**: `npx localtunnel --port 3000`
- **Pagekite**: For persistent URLs

## 🔗 Step 4: Set up the Webhook

Once you have your public URL set up:

1. **Set up the webhook**:
   ```bash
   npx tsx src/scripts/setup-webhook.ts
   ```

You should see output like:
```
🔧 Setting up Telegram webhook...
📍 Webhook URL: https://your-url.ngrok.io/api/webhook
✅ Webhook set successfully!
🔍 Webhook Info:
  URL: https://your-url.ngrok.io/api/webhook
  ...
```

## 🧪 Step 5: Test Your Bot

1. **Find your bot** in Telegram by searching for its username
2. **Start a chat** with your bot
3. **Send `/start`** - you should get a welcome message
4. **Try other commands**:
   - `/help` - Shows available commands
   - `/about` - Shows bot information
   - `/ping` - Tests bot responsiveness
   - Send any text message - the bot will echo it back

## 🌐 Step 6: Deploy to Production

### Deploy to Vercel (Recommended)

1. **Build your project**:
   ```bash
   npm run build
   ```

2. **Install Vercel CLI** (if not already installed):
   ```bash
   npm i -g vercel
   ```

3. **Deploy**:
   ```bash
   vercel --prod
   ```

4. **Set environment variables** in Vercel dashboard:
   - Go to your project settings
   - Add `TELEGRAM_BOT_TOKEN` and `TELEGRAM_WEBHOOK_URL`
   - Use your production URL: `https://your-project.vercel.app/api/webhook`

5. **Update webhook** with production URL:
   ```bash
   npx tsx src/scripts/setup-webhook.ts
   ```

### Deploy to Other Platforms

The bot works on any platform that supports Next.js:
- **Netlify**: Use Netlify CLI or Git deployment
- **Railway**: Connect your Git repository
- **Heroku**: Use Git deployment with buildpacks
- **DigitalOcean App Platform**: Connect your repository

## 🔧 Customizing Your Bot

### Adding New Commands

Edit `src/app/api/webhook/route.ts` and add new command handlers:

```typescript
else if (messageText === '/weather') {
  await bot.sendMessage(chatId, 'Getting weather information...');
} else if (messageText === '/joke') {
  await bot.sendMessage(chatId, 'Why do programmers prefer dark mode? Because light attracts bugs! 🐛');
}
```

### Adding Inline Keyboards

```typescript
await bot.sendMessage(chatId, 'Choose an option:', {
  reply_markup: {
    inline_keyboard: [
      [{ text: '🎲 Random Number', callback_data: 'random' }],
      [{ text: '📅 Current Date', callback_data: 'date' }]
    ]
  }
});
```

### Handling Callback Queries

Add this to your webhook handler:

```typescript
if (body.callback_query) {
  const callbackQuery = body.callback_query;
  const data = callbackQuery.data;
  const chatId = callbackQuery.message.chat.id;
  
  if (data === 'random') {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    await bot.editMessageText(`🎲 Random number: ${randomNum}`, {
      chat_id: chatId,
      message_id: callbackQuery.message.message_id
    });
  }
}
```

## 🔍 Troubleshooting

### Common Issues

1. **Bot not responding**:
   - Check if your bot token is correct
   - Verify the webhook is set up properly
   - Check server logs for errors

2. **Webhook not receiving updates**:
   - Ensure your URL is publicly accessible
   - Check if the webhook URL in `.env.local` is correct
   - Verify webhook status: `npx tsx src/scripts/setup-webhook.ts`

3. **Environment variables not working**:
   - Restart your development server after changing `.env.local`
   - Make sure the file is named exactly `.env.local`
   - Check for typos in variable names

### Debug Commands

1. **Check webhook info**:
   ```bash
   npx tsx src/scripts/setup-webhook.ts
   ```

2. **Delete webhook** (useful for testing):
   ```bash
   npx tsx src/scripts/setup-webhook.ts delete
   ```

3. **Test webhook endpoint** directly:
   ```bash
   curl https://your-url.com/api/webhook
   ```

## 📱 Next Steps

- Add database integration for storing user data
- Implement user authentication and sessions
- Add file upload/download capabilities
- Create admin commands and user management
- Add logging and analytics
- Set up automated testing

## 🆘 Need Help?

- Check the [Telegram Bot API documentation](https://core.telegram.org/bots/api)
- Review [Next.js documentation](https://nextjs.org/docs)
- Look at the project's `README.md` for more details

Your Telegram bot is now ready to use! 🎉