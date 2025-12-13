# Color Organizer

A modern React application for organizing and managing colors with AI-powered features. This project integrates ChatGPT/OpenAI via OpenRouter API to provide intelligent color naming, rating, and description capabilities.

## Features

- 🎨 **Color Management**: Add, rate, and remove colors from your collection
- 🤖 **AI-Powered Color Naming**: Automatically generate creative names for colors using AI
- ⭐ **AI Color Rating**: Get AI-generated ratings (1-5 stars) for your colors
- 📝 **AI Color Descriptions**: Receive mood and emotional descriptions for colors
- 🎯 **Modern UI**: Built with React, Vite, and Tailwind CSS
- 🔄 **Real-time Updates**: Interactive color list with instant updates

## Tech Stack

### Frontend
- **React 19** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling framework
- **UUID** - Unique ID generation

### Backend
- **Express.js** - Web server framework
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### AI Integration
- **OpenRouter API** - Gateway to access various AI models (ChatGPT, etc.)

## Project Structure

```
color-organizer/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── service/       # API service layer
│   │   └── App.jsx        # Main application component
│   ├── package.json
│   └── vite.config.js
├── server/                 # Express backend server
│   ├── controllers/       # Request handlers
│   ├── sevices/          # Business logic (chat service)
│   ├── routes.js         # API routes
│   ├── index.js          # Server entry point
│   └── package.json
└── README.md
```

## Prerequisites

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn**
- **OpenRouter API Key** - Get one at [OpenRouter.ai](https://openrouter.ai/)

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd color-organizer
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

## Environment Setup

### Server Configuration

1. Navigate to the `server` directory
2. Copy `example.env` to `.env`:
   ```bash
   cp example.env .env
   ```
3. Add your OpenRouter API key to `server/.env`:
   ```env
   OPENROUTER_API_KEY=your_openrouter_api_key_here
   PORT=3000
   ```

### Client Configuration

1. Navigate to the `client` directory
2. Copy `example.env` to `.env`:
   ```bash
   cp example.env .env
   ```
3. Add your API URL to `client/.env`:
   ```env
   VITE_API_URL=http://localhost:3000
   ```

## Running the Application

### Start the Server

1. Navigate to the `server` directory:
   ```bash
   cd server
   ```

2. Start the server:
   ```bash
   node index.js
   ```

   The server will run on `http://localhost:3000` (or the port specified in your `.env` file).

### Start the Client

1. Open a new terminal and navigate to the `client` directory:
   ```bash
   cd client
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

   The client will typically run on `http://localhost:5173` (Vite's default port).

3. Open your browser and navigate to the client URL to use the application.

## API Endpoints

The server provides the following API endpoints:

- `GET /` - Health check endpoint
- `GET /api/hello` - Test endpoint
- `POST /api/color` - Get AI-generated color name
  - Body: `{ "hex": "#FF5733" }`
- `POST /api/rate` - Get AI-generated color rating
  - Body: `{ "title": "Color Name", "hex": "#FF5733" }`
- `POST /api/describe` - Get AI-generated color description
  - Body: `{ "title": "Color Name", "hex": "#FF5733" }`

## Usage

1. **Add a Color**: Use the color picker or enter a hex code to add a new color to your collection.

2. **Get AI Color Name**: Click on a color to get an AI-generated creative name.

3. **Rate Colors**: Use the star rating system to rate colors, or get an AI-generated rating.

4. **Get Color Description**: Request AI-generated descriptions that include mood and emotional associations.

5. **Remove Colors**: Delete colors from your collection as needed.

## Building for Production

### Build the Client

```bash
cd client
npm run build
```

The production build will be created in the `client/dist` directory.

### Preview Production Build

```bash
cd client
npm run preview
```

## Development

- The client uses Vite's Hot Module Replacement (HMR) for fast development.
- The server uses Express.js with CORS enabled for cross-origin requests.
- Both client and server use ES6 modules.

## License

ISC

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.