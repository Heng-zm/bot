import TelegramBot from 'node-telegram-bot-api';

// Load environment variables
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env.local') });

const token = process.env.TELEGRAM_BOT_TOKEN;
const webhookUrl = process.env.TELEGRAM_WEBHOOK_URL;

if (!token) {
  console.error('❌ TELEGRAM_BOT_TOKEN is not defined in .env.local');
  process.exit(1);
}

if (!webhookUrl) {
  console.error('❌ TELEGRAM_WEBHOOK_URL is not defined in .env.local');
  process.exit(1);
}

const bot = new TelegramBot(token);

async function setupWebhook() {
  try {
    console.log('🔧 Setting up Telegram webhook...');
    console.log(`📍 Webhook URL: ${webhookUrl}`);
    
    // Set the webhook
    const result = await bot.setWebHook(webhookUrl!);
    
    if (result) {
      console.log('✅ Webhook set successfully!');
      
      // Get webhook info to verify
      const webhookInfo = await bot.getWebHookInfo();
      console.log('🔍 Webhook Info:');
      console.log(`  URL: ${webhookInfo.url}`);
      console.log(`  Has Custom Certificate: ${webhookInfo.has_custom_certificate}`);
      console.log(`  Pending Update Count: ${webhookInfo.pending_update_count}`);
      console.log(`  Max Connections: ${webhookInfo.max_connections}`);
      
      if (webhookInfo.last_error_date) {
        console.log(`  Last Error Date: ${new Date(webhookInfo.last_error_date * 1000)}`);
        console.log(`  Last Error Message: ${webhookInfo.last_error_message}`);
      }
    } else {
      console.log('❌ Failed to set webhook');
    }
  } catch (error) {
    console.error('❌ Error setting up webhook:', error);
  }
}

async function deleteWebhook() {
  try {
    console.log('🗑️  Deleting webhook...');
    const result = await bot.deleteWebHook();
    if (result) {
      console.log('✅ Webhook deleted successfully!');
    }
  } catch (error) {
    console.error('❌ Error deleting webhook:', error);
  }
}

// Check command line arguments
const command = process.argv[2];

if (command === 'delete') {
  deleteWebhook();
} else {
  setupWebhook();
}