# Titan E-commerce Application

A modern, responsive e-commerce web application built with React, TypeScript, and Tailwind CSS, inspired by the [Titan website](https://titango.shop/).

## 🚀 Features

- **Modern UI/UX**: Clean, responsive design with smooth animations
- **Multi-language Support**: Built-in language selector for global reach
- **Multi-currency Support**: Currency conversion capabilities
- **Shopping Cart**: Full cart functionality with state management
- **Product Catalog**: Browse products with filtering and sorting
- **User Authentication**: Login and registration system
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **TypeScript**: Full type safety and better development experience

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **State Management**: React Context API with useReducer
- **Routing**: React Router v6
- **Icons**: Lucide React
- **Build Tool**: Create React App
- **Package Manager**: npm

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx     # Navigation and header
│   └── Footer.tsx     # Footer with company info
├── context/            # React context providers
│   └── CartContext.tsx # Shopping cart state management
├── pages/              # Page components
│   ├── Home.tsx       # Landing page
│   ├── Products.tsx   # Product catalog
│   ├── ProductDetail.tsx # Individual product view
│   ├── Cart.tsx       # Shopping cart
│   ├── Login.tsx      # User authentication
│   └── Register.tsx   # User registration
├── App.tsx             # Main application component
├── index.tsx           # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd titan-ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🎨 Design Features

### Color Scheme
- **Primary**: Blue (#3b82f6, #2563eb)
- **Secondary**: Gray (#64748b, #475569)
- **Accent**: Yellow (#fbbf24) for ratings
- **Success**: Green (#10b981) for positive actions

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700

### Components
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Consistent styling with hover effects
- **Forms**: Clean input fields with validation states
- **Navigation**: Sticky header with mobile menu

## 📱 Responsive Design

The application is built with a mobile-first approach:

- **Mobile**: Single column layout, collapsible navigation
- **Tablet**: Two-column grid for products
- **Desktop**: Full three-column grid with sidebar filters

## 🔧 Customization

### Adding New Products

Edit the `products` array in the relevant components or create a data service:

```typescript
const newProduct: Product = {
  id: 'unique-id',
  name: 'Product Name',
  price: 99.99,
  image: 'image-url',
  category: 'Category',
  brand: 'Brand',
  description: 'Product description'
};
```

### Modifying Categories

Update the categories array in the Header and Home components:

```typescript
const categories = [
  "New Category",
  "Another Category",
  // ... existing categories
];
```

### Changing Colors

Modify the Tailwind config file (`tailwind.config.js`):

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-color',
        600: '#your-darker-color',
      }
    }
  }
}
```

## 🌐 Multi-language Support

The application includes support for multiple languages:

- English (default)
- Chinese (中文)
- Korean (한국어)
- Spanish (Español)
- German (Deutsch)
- Italian (Italiano)
- Japanese (日本語)
- French (Français)

## 💰 Multi-currency Support

Supported currencies include:

- USD (US Dollar)
- EUR (Euro)
- GBP (Pound Sterling)
- JPY (Japanese Yen)
- CAD (Canadian Dollar)
- AUD (Australian Dollar)

## 🛒 Shopping Cart Features

- Add/remove products
- Quantity adjustment
- Price calculation
- Persistent state (localStorage ready)
- Cart summary with tax calculation

## 🔐 Authentication System

- User registration with validation
- Login with social options
- Password strength indicator
- Form validation with error handling
- Remember me functionality

## 📦 Product Management

- Product filtering by category, brand, and price
- Sorting options (price, name, featured)
- Grid and list view modes
- Product search functionality
- Related products suggestions

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag the `build` folder to Netlify
3. Configure custom domain if needed

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Design inspired by [TitanGo](https://titango.shop/)
- Icons from [Lucide React](https://lucide.dev/)
- UI components styled with [Tailwind CSS](https://tailwindcss.com/)
- Images from [Unsplash](https://unsplash.com/)

## 📞 Support

For support and questions:

- **Email**: global@titango.fun
- **Phone**: +49 157 75127832
- **Address**: Mies van der Rohe Street 6 & 8, 80807 Munich, Germany

## 🔮 Future Enhancements

- [ ] Payment gateway integration
- [ ] User reviews and ratings system
- [ ] Wishlist functionality
- [ ] Advanced search with filters
- [ ] Admin dashboard
- [ ] Inventory management
- [ ] Order tracking system
- [ ] Email notifications
- [ ] PWA capabilities
- [ ] Analytics integration

---

**Built with ❤️ for the TitanGo community**

