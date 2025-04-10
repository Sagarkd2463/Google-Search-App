GOOGLE CLONE 
------------------------------------------
A fully responsive Google Search Clone built with modern web technologies, replicating core features of Google Search including web search, image/video/news tabs, and voice-based search input. The application also integrates Firebase Authentication for user sign-in and sign-out functionality.

FEATURES 
------------------------------------------
Dynamic search results using a simulated API pattern

Tab-based navigation (Web, Images, Videos, News)

Speech-to-text search using Web Speech API

Firebase Authentication (Google Sign-in/Sign-out)

Search history tracking and responsive UI

Reusable components with client-side routing

TECH STACK 
------------------------------------------
Frontend: Next.js (App Router), React.js, Tailwind CSS
Authentication: Firebase Auth
State Management: React Context
Utilities: React Icons, Web Speech API

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
------------------------------------------

1. Run the app locally with npm run dev

2. Search any keyword from the homepage input

3. Use voice search (microphone icon) for hands-free input

4. Navigate through the tabs to explore Web, Image, Video, and News results

5. Sign in or sign out with your Google account (Firebase Auth)