# Hoffmangruppe Promotions Website

A modern, responsive website built with Next.js and Tailwind CSS for Hoffmangruppe Promotions.

## Features
- Responsive design with Tailwind CSS
- Dynamic routing with Next.js
- Product catalog with Algolia search integration
- Contact form with submission handling
- Industry insights section with PDF downloads
- Reusable components for consistent UI

## Technologies Used
- Next.js 14
- React 18
- Tailwind CSS 3
- Headless UI for accessible components
- Algolia for product search
- Framer Motion for animations

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation
1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   Create a `.env.local` file with:
   ```
   NEXT_PUBLIC_ALGOLIA_APP_ID=your_algolia_app_id
   NEXT_PUBLIC_ALGOLIA_SEARCH_KEY=your_search_key
   ```

### Running the Development Server
```bash
npm run dev
```
The application will be available at http://localhost:3000

### Building for Production
```bash
npm run build
npm run start
```

## Deployment

### Vercel Deployment
1. Push your code to a GitHub repository
2. Go to https://vercel.com
3. Click "New Project"
4. Select your Git provider and repository
5. Vercel will automatically detect the Next.js project
6. Add environment variables in Vercel dashboard:
   - NEXT_PUBLIC_ALGOLIA_APP_ID
   - NEXT_PUBLIC_ALGOLIA_SEARCH_KEY
7. Deploy your site

## Project Structure
```
hoffmangruppe-website/
├── components/       # Reusable components
├── pages/            # Application pages
├── public/           # Static assets
├── styles/           # Global styles
├── utils/            # Utility functions
├── data/             # Static data files
├── tailwind.config.js # Tailwind configuration
└── package.json      # Project dependencies
```

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License
Distributed under the MIT License. See `LICENSE` for more information.
