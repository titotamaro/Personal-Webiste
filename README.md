# Tito Tamaro - Personal Portfolio

A premium, interactive personal portfolio website built with React (Vite) and Vanilla CSS, featuring an integrated command-line interface, a sleek light mode aesthetic, and glassmorphism styling.

## Features

- **Dynamic Hero Section**: Interactive typing effect and floating background visuals.
- **Interactive Terminal**: A fully functional mock IDE terminal where visitors can query `about`, `education`, `skills`, `experience`, and `contact` information.
- **Glassmorphic Capabilities Grid**: Smooth micro-animations and intersection observers to lazily load visually distinct capability cards. 
- **Light Theme**: Clean, professional, and high-contrast design system.
- **Responsive Design**: Scales beautifully from mobile screens to 4K displays.

## Technology Stack

- React 18
- Vite
- Vanilla CSS (CSS Variables, Keyframes, Flexbox/Grid)

## Running the Project Locally

Follow these steps to run the portfolio on your local machine:

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/en/) installed (version 16 or higher is recommended).

### 1. Clone the repository

```bash
git clone https://github.com/titotamaro/portfolio.git
cd portfolio
```

*(Note: If you downloaded the ZIP file instead, extract it and open the folder in your terminal).*

### 2. Install dependencies

Run the following command to install all necessary packages (like React and Vite):

```bash
npm install
```

### 3. Start the development server

Launch the Vite development server by running:

```bash
npm run dev
```

### 4. View the website

Open your browser and navigate to the local URL provided in the terminal, usually:
`http://localhost:5173`

## Customization

To update the terminal commands or hero text, simply edit the respective React components inside the `src/components/` directory.

- `src/components/Terminal.jsx` - Update the `systemCommands` object.
- `src/components/Capabilities.jsx` - Update the `capabilitiesList` array.
- `src/index.css` - Update the CSS `:root` variables to tweak colors or switch back to a dark theme.

## License

MIT License. Feel free to use this as a template for your own portfolio!
