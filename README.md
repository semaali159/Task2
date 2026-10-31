# Chat & Search Mobile UI

A mobile-first frontend built with **React** that implements a Figma design with three screens: **Chats**, **Individual Chat**, and **Search Results**.

## Screens

1. **Chats**: a list of conversations, each showing an avatar, the contact name, and a preview of the last message.
2. **Individual chat**: a conversation view with a back button, the contact name in the header, and message bubbles (incoming and outgoing) with small avatars.
3. **Search results**: a search input, an "ALL RESULTS" label, a 3-column image grid, and a "SEE MORE" button.

All screens share a bottom navigation bar with five items: Home, Search, a highlighted gradient "+" button, Chats, and Profile.

## Design Requirements

### 1. Typography and Assets

- **Font:** Roboto from Google Fonts (the "Robot" font family in the brief).
- **Icons:** Lucide React (or Font Awesome / any efficient icon library).
- **Images:** appropriate placeholder images for avatars and search results.

### 2. Styling

- Responsive React components that match the Figma design.
- Clean, maintainable CSS using CSS Modules, Styled Components, or Tailwind CSS.

### 3. Interactions

Smooth CSS transitions for:

- Button hover and focus states.
- Every interactive UI element in the design (chat rows, nav items, search input, grid images, "SEE MORE" button).

### 4. Quality

- Pixel-perfect match with the Figma design.
- Mobile-responsive layout.

## Tech Stack

- React
- Vite
- React Router (navigation between screens)
- Tailwind CSS (or CSS Modules / Styled Components)
- Lucide React (icons)
- Google Fonts (Roboto)

## Getting Started

```bash
npm install
npm run dev
```

Open the URL shown in the terminal, usually `http://localhost:5173`. For the best view, use your browser's device toolbar with a mobile viewport (for example 375 x 812).

## Scripts

```bash
npm run dev      # Start the development server
npm run build    # Build for production
npm run preview  # Preview the production build locally
npm run lint     # Lint the code
```
