export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-500 rounded-full mb-6">
              <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              Telegram Bot
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Built with Next.js 15, TypeScript, and the Telegram Bot API
            </p>
          </div>

          {/* Status Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Bot Status</h2>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-600 dark:text-green-400 font-semibold">Webhook Endpoint Active</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The bot is ready to receive messages through the webhook endpoint at <code className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-sm">/api/webhook</code>
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Available Commands:</h3>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                  <li><code>/start</code> - Welcome message</li>
                  <li><code>/help</code> - Show available commands</li>
                  <li><code>/about</code> - Bot information</li>
                  <li><code>/ping</code> - Test bot response</li>
                </ul>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Features:</h3>
                <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                  <li>✅ Echo messages</li>
                  <li>✅ Command handling</li>
                  <li>✅ Webhook integration</li>
                  <li>✅ TypeScript support</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Start */}
          <div className="text-left bg-gray-50 dark:bg-gray-900 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">Quick Start</h2>
            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">1. Create a Telegram Bot</h3>
                <p className="text-gray-600 dark:text-gray-300">Message @BotFather on Telegram and create a new bot</p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">2. Configure Environment Variables</h3>
                <div className="bg-gray-800 text-green-400 p-3 rounded text-xs font-mono">
                  TELEGRAM_BOT_TOKEN=your_bot_token_here<br/>
                  TELEGRAM_WEBHOOK_URL=https://your-domain.com/api/webhook
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">3. Set up Webhook</h3>
                <div className="bg-gray-800 text-green-400 p-3 rounded text-xs font-mono">
                  npx tsx src/scripts/setup-webhook.ts
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
