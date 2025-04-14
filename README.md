GOOGLE CLONE 
----------------------
A fully responsive Google Search Clone built with modern web technologies, replicating core features of Google Search including web search, image/video/news tabs, and voice-based search input. The application also integrates Firebase Authentication for user sign-in and sign-out functionality.

FEATURES 
-----------------------
# Dynamic search results using a simulated API pattern

# Tab-based navigation (Web, Images, Videos, News)

# Speech-to-text search using Web Speech API

# Firebase Authentication (Google Sign-in/Sign-out)

# Search history tracking and responsive UI

# Reusable components with client-side routing

TECH STACK 
------------------------------------------------------
Frontend: Next.js (App Router), React.js, Tailwind CSS
Authentication: Firebase Auth
State Management: React Context
Utilities: React Icons, Web Speech API

REQUIRED PACKAGES
------------------------------------------------

⚛️ CORE DEPENDENCIES
----------------------------------------------

Package	            Version	              Purpose
-------------------------------------------------------------------------------------------
next	              ^14.2.15	            React framework for SSR, SSG, and routing
react          	    ^18	                  Core React library
react-dom	          ^18	                  React DOM renderer for browser apps
firebase	          ^11.0.2               Firebase services (authentication, storage, etc.)
html-react-parser	  ^5.1.10	              Parses and renders HTML as React elements
styled-components	  ^6.1.13	              CSS-in-JS styling for React components
react-icons	        ^5.2.1	              Collection of popular icons for React
react-toastify	    ^10.0.6	              Beautiful toast notifications for alerts/messages

🎨 STYLING & UTILITY
---------------------------------------------

Package	              Version	            Purpose
-------------------------------------------------------------------------------------
tailwindcss	          ^3.4.14	            Utility-first CSS framework
autoprefixer	        ^10.4.20	          Adds vendor prefixes to CSS automatically
postcss	              ^8.4.47	            CSS transformations and plugin support

🧹 LINTING & CODE QUALITY
---------------------------------------------

Package	              Version	             Purpose
---------------------------------------------------------------------------------------
eslint	              ^8	                 JavaScript/React linter
eslint-config-next	  14.2.4	             ESLint configuration optimized for Next.js


FOLDER STRUCTURE 
------------------------------------------

├── app/
│   ├── layout.js
│   ├── page.js
│   └── search/
│       ├── web/
│       ├── image/
│       ├── video/
│       └── news/
├── components/
│   ├── SearchBox.js
│   ├── SearchHeader.js
│   ├── SearchHeaderOptions.js
│   ├── PaginationButtons.js
├── context/
│   └── AuthContext.js
├── utils/
│   └── firebase.js
├── public/
│   └── images/
├── styles/
├── README.md


USAGE 
--------------------------------

1. Run the app locally with npm run dev
2. Search any keyword from the homepage input
3. Use voice search (microphone icon) for hands-free input
4. Navigate through the tabs to explore Web, Image, Video, and News results
5. Sign in or sign out with your Google account (Firebase Auth)
