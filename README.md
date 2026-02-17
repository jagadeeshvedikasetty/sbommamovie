# SHETTY - Telugu Movie Streaming Platform

A modern, responsive movie streaming website built with React.

## Features

- 🎬 Responsive movie grid layout
- 🔍 Real-time search functionality
- ✨ Smooth animations and transitions
- 🎨 Modern dark theme with green accents
- 📱 Mobile-friendly design
- 🎯 Hover effects and interactive elements

## Tech Stack

- React 18
- CSS3 with animations
- Modern JavaScript (ES6+)
- Google Fonts (Poppins, Bebas Neue)

## Installation

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Setup

1. Extract the zip file
2. Navigate to the project directory:
   ```bash
   cd shetty-website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

To create a production build:

```bash
npm run build
```

The build folder will contain the optimized production files.

## Project Structure

```
shetty-website/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Header.css
│   │   ├── Hero.js
│   │   ├── Hero.css
│   │   ├── MovieGrid.js
│   │   ├── MovieGrid.css
│   │   ├── MovieCard.js
│   │   └── MovieCard.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## Customization

### Adding Movies
Edit `src/components/MovieGrid.js` and add/modify the `moviesData` array.

### Changing Colors
Modify CSS variables in `src/index.css`:
- `--primary-green`: Main accent color
- `--dark-bg`: Background color
- `--card-bg`: Card background
- `--text-primary`: Primary text color
- `--text-secondary`: Secondary text color

### Fonts
The project uses Google Fonts. To change fonts, update the link in `public/index.html` and modify font-family in CSS files.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for demonstration purposes.

## Contact

For any queries or suggestions, please reach out through the website's Bug section.
