# Fake News Detection System — Complete Frontend Environment Setup

> **Stack:** React 18 + Vite + Tailwind CSS + Redux Toolkit + React Router DOM + Framer Motion + Axios

---

## PHASE 1 — Project Initialization

### 1.1 Create the Vite + React project

```bash
npm create vite@latest fake-news-detector -- --template react
cd fake-news-detector
```

### 1.2 Install all dependencies

```bash
# Core routing & state
npm install react-router-dom @reduxjs/toolkit react-redux

# HTTP & API
npm install axios

# UI & Styling
npm install tailwindcss @tailwindcss/forms postcss autoprefixer
npm install framer-motion
npm install react-icons
npm install react-hot-toast

# Forms & Validation
npm install react-hook-form @hookform/resolvers zod

# Charts
npm install recharts

# Utilities
npm install clsx date-fns

# Dev dependencies
npm install -D eslint eslint-plugin-react eslint-plugin-react-hooks \
  @eslint/js globals \
  @vitejs/plugin-react
```

### 1.3 Initialize Tailwind

```bash
npx tailwindcss init -p
```

---

## PHASE 2 — Folder Structure

Create all folders with this single command block:

```bash
mkdir -p src/{assets/{images,icons,fonts},components/{common,forms,ui,charts},pages,layouts,routes,redux/slices,services,hooks,context,constants,utils,styles,animations}
touch src/App.jsx src/main.jsx
```

### Folder Explanations

| Folder | Purpose |
|---|---|
| `assets/` | Static files: images, SVGs, fonts |
| `components/common/` | Shared layout components (Navbar, Sidebar, Footer) |
| `components/forms/` | Controlled form components (NewsInput, UrlInput, FileUpload) |
| `components/ui/` | Generic UI primitives (Button, Card, Badge, Spinner, Modal) |
| `components/charts/` | Recharts wrappers (ConfidenceMeter, PieChart, BarChart) |
| `pages/` | One file per route page |
| `layouts/` | Page shell layouts (AppLayout, AuthLayout) |
| `routes/` | Route configuration and guards |
| `redux/` | Store + feature slices |
| `services/` | Axios API service functions |
| `hooks/` | Custom React hooks |
| `context/` | React Context providers (Theme) |
| `constants/` | App-wide string/enum constants |
| `utils/` | Pure utility functions |
| `styles/` | Global CSS, Tailwind base layer extensions |
| `animations/` | Framer Motion variants |

---

## PHASE 3 — Package.json

```json
{
  "name": "fake-news-detector",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.3.4",
    "@reduxjs/toolkit": "^2.2.1",
    "axios": "^1.6.8",
    "clsx": "^2.1.0",
    "date-fns": "^3.4.0",
    "framer-motion": "^11.0.14",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-hook-form": "^7.51.1",
    "react-hot-toast": "^2.4.1",
    "react-icons": "^5.0.1",
    "react-redux": "^9.1.0",
    "react-router-dom": "^6.22.3",
    "recharts": "^2.12.2",
    "zod": "^3.22.4"
  },
  "devDependencies": {
    "@eslint/js": "^9.0.0",
    "@tailwindcss/forms": "^0.5.7",
    "@types/react": "^18.2.66",
    "@types/react-dom": "^18.2.22",
    "@vitejs/plugin-react": "^4.2.1",
    "autoprefixer": "^10.4.19",
    "eslint": "^9.0.0",
    "eslint-plugin-react": "^7.34.1",
    "eslint-plugin-react-hooks": "^4.6.0",
    "globals": "^15.0.0",
    "postcss": "^8.4.38",
    "tailwindcss": "^3.4.3",
    "vite": "^5.2.0"
  }
}
```

---

## PHASE 4 — Environment Variables

### `.env`
```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=FakeNewsDetector
VITE_APP_VERSION=1.0.0
```

### `.env.production`
```env
VITE_API_URL=https://your-backend.onrender.com/api
VITE_APP_NAME=FakeNewsDetector
VITE_APP_VERSION=1.0.0
```

### `.env.example`  *(commit this, not .env)*
```env
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=FakeNewsDetector
VITE_APP_VERSION=1.0.0
```

---

## PHASE 5 — Tailwind Configuration

### `tailwind.config.js`

```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Brand primaries
        primary: {
          50:  "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          950: "#172554",
        },
        // Verdict colours
        verdict: {
          real:      "#22c55e",   // green-500
          fake:      "#ef4444",   // red-500
          uncertain: "#f59e0b",   // amber-500
        },
        // Neutral surface tokens
        surface: {
          light: "#f8fafc",
          dark:  "#0f172a",
        },
        card: {
          light: "#ffffff",
          dark:  "#1e293b",
        },
        border: {
          light: "#e2e8f0",
          dark:  "#334155",
        },
      },
      fontFamily: {
        sans:  ["Inter", "system-ui", "sans-serif"],
        mono:  ["JetBrains Mono", "monospace"],
        display: ["Plus Jakarta Sans", "sans-serif"],
      },
      fontSize: {
        "2xs": ["0.625rem", { lineHeight: "0.875rem" }],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        glow:       "0 0 20px rgba(59, 130, 246, 0.35)",
        "glow-red": "0 0 20px rgba(239, 68, 68, 0.35)",
        "glow-green":"0 0 20px rgba(34, 197, 94, 0.35)",
        card:       "0 4px 24px rgba(0,0,0,0.06)",
        "card-dark":"0 4px 24px rgba(0,0,0,0.4)",
      },
      animation: {
        "pulse-slow":   "pulse 3s cubic-bezier(0.4,0,0.6,1) infinite",
        "spin-slow":    "spin 3s linear infinite",
        "bounce-soft":  "bounce 2s infinite",
        "fade-in":      "fadeIn 0.3s ease-out",
        "slide-up":     "slideUp 0.4s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%":   { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      screens: {
        "xs": "475px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
};
```

### `postcss.config.js`

```js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### `src/styles/index.css`

```css
/* ── Google Fonts ── */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');

@tailwind base;
@tailwind components;
@tailwind utilities;

/* ── Base layer ── */
@layer base {
  *, *::before, *::after { box-sizing: border-box; }

  html {
    @apply scroll-smooth antialiased;
  }

  body {
    @apply bg-surface-light text-slate-800 font-sans
           dark:bg-surface-dark dark:text-slate-100
           transition-colors duration-300;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-display tracking-tight;
  }

  a {
    @apply text-primary-600 hover:text-primary-700
           dark:text-primary-400 dark:hover:text-primary-300
           transition-colors;
  }

  ::-webkit-scrollbar       { @apply w-1.5; }
  ::-webkit-scrollbar-track { @apply bg-transparent; }
  ::-webkit-scrollbar-thumb { @apply bg-slate-300 dark:bg-slate-600 rounded-full; }

  ::selection { @apply bg-primary-200 dark:bg-primary-800; }
}

/* ── Component layer ── */
@layer components {

  /* ── Buttons ── */
  .btn {
    @apply inline-flex items-center justify-center gap-2
           px-4 py-2 rounded-xl font-semibold text-sm
           transition-all duration-200
           focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
           disabled:opacity-50 disabled:cursor-not-allowed;
  }

  .btn-primary {
    @apply btn bg-primary-600 text-white
           hover:bg-primary-700 active:bg-primary-800
           focus-visible:ring-primary-500
           shadow-sm hover:shadow-glow;
  }

  .btn-secondary {
    @apply btn bg-white text-slate-700 border border-border-light
           hover:bg-slate-50 active:bg-slate-100
           dark:bg-card-dark dark:text-slate-200 dark:border-border-dark
           dark:hover:bg-slate-700
           focus-visible:ring-primary-500 shadow-sm;
  }

  .btn-danger {
    @apply btn bg-red-600 text-white hover:bg-red-700
           focus-visible:ring-red-500 shadow-sm hover:shadow-glow-red;
  }

  .btn-ghost {
    @apply btn text-slate-600 dark:text-slate-300
           hover:bg-slate-100 dark:hover:bg-slate-800
           focus-visible:ring-slate-400;
  }

  .btn-sm { @apply px-3 py-1.5 text-xs rounded-lg; }
  .btn-lg { @apply px-6 py-3 text-base rounded-2xl; }

  /* ── Cards ── */
  .card {
    @apply bg-card-light dark:bg-card-dark
           border border-border-light dark:border-border-dark
           rounded-2xl shadow-card dark:shadow-card-dark
           p-6 transition-all duration-200;
  }

  .card-hover {
    @apply card hover:shadow-lg hover:-translate-y-0.5 cursor-pointer;
  }

  /* ── Form inputs ── */
  .input {
    @apply w-full px-4 py-2.5 rounded-xl
           bg-white dark:bg-slate-800
           border border-border-light dark:border-border-dark
           text-slate-800 dark:text-slate-100
           placeholder-slate-400 dark:placeholder-slate-500
           focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent
           transition-all duration-200 text-sm;
  }

  .input-error {
    @apply border-red-500 focus:ring-red-500;
  }

  .label {
    @apply block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5;
  }

  .error-text {
    @apply text-xs text-red-500 dark:text-red-400 mt-1;
  }

  /* ── Badges ── */
  .badge {
    @apply inline-flex items-center gap-1 px-2.5 py-0.5
           rounded-full text-xs font-semibold;
  }

  .badge-real      { @apply badge bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400; }
  .badge-fake      { @apply badge bg-red-100   text-red-700   dark:bg-red-900/30   dark:text-red-400; }
  .badge-uncertain { @apply badge bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400; }

  /* ── Page shell ── */
  .page-container {
    @apply max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8;
  }

  .page-title {
    @apply text-2xl sm:text-3xl font-display font-bold
           text-slate-900 dark:text-white mb-2;
  }

  .page-subtitle {
    @apply text-slate-500 dark:text-slate-400 text-sm sm:text-base;
  }

  /* ── Sidebar ── */
  .sidebar-link {
    @apply flex items-center gap-3 px-3 py-2.5
           rounded-xl text-sm font-medium
           text-slate-600 dark:text-slate-300
           hover:bg-primary-50 hover:text-primary-700
           dark:hover:bg-primary-900/20 dark:hover:text-primary-300
           transition-all duration-150;
  }

  .sidebar-link-active {
    @apply bg-primary-600 text-white
           dark:bg-primary-600 dark:text-white
           hover:bg-primary-700 dark:hover:bg-primary-700;
  }

  /* ── Stats card ── */
  .stat-card {
    @apply card flex flex-col gap-1;
  }

  .stat-value {
    @apply text-3xl font-display font-bold text-slate-900 dark:text-white;
  }

  .stat-label {
    @apply text-sm text-slate-500 dark:text-slate-400;
  }
}

/* ── Utility layer ── */
@layer utilities {
  .text-gradient {
    @apply bg-gradient-to-r from-primary-600 to-violet-600
           bg-clip-text text-transparent;
  }

  .glass {
    @apply bg-white/70 dark:bg-slate-900/70 backdrop-blur-md
           border border-white/20 dark:border-white/10;
  }

  .no-scrollbar {
    scrollbar-width: none;
    -ms-overflow-style: none;
  }
  .no-scrollbar::-webkit-scrollbar { display: none; }
}
```

---

## PHASE 6 — Vite Configuration

### `vite.config.js`

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages":      path.resolve(__dirname, "./src/pages"),
      "@layouts":    path.resolve(__dirname, "./src/layouts"),
      "@redux":      path.resolve(__dirname, "./src/redux"),
      "@services":   path.resolve(__dirname, "./src/services"),
      "@hooks":      path.resolve(__dirname, "./src/hooks"),
      "@context":    path.resolve(__dirname, "./src/context"),
      "@utils":      path.resolve(__dirname, "./src/utils"),
      "@constants":  path.resolve(__dirname, "./src/constants"),
      "@animations": path.resolve(__dirname, "./src/animations"),
    },
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor:   ["react", "react-dom", "react-router-dom"],
          redux:    ["@reduxjs/toolkit", "react-redux"],
          charts:   ["recharts"],
          motion:   ["framer-motion"],
        },
      },
    },
  },
});
```

---

## PHASE 7 — Constants & Routes

### `src/constants/index.js`

```js
// ── API Endpoints ──────────────────────────────────────────
export const API_ENDPOINTS = {
  AUTH: {
    LOGIN:    "/auth/login",
    REGISTER: "/auth/register",
    LOGOUT:   "/auth/logout",
    REFRESH:  "/auth/refresh",
    PROFILE:  "/auth/profile",
  },
  NEWS: {
    ANALYZE: "/news/analyze",
    URL:     "/news/url",
    UPLOAD:  "/news/upload",
  },
  HISTORY: {
    LIST:   "/history",
    DELETE: (id) => `/history/${id}`,
    CLEAR:  "/history/clear",
  },
  ADMIN: {
    USERS:   "/admin/users",
    STATS:   "/admin/stats",
    REPORTS: "/admin/reports",
  },
};

// ── Token keys ─────────────────────────────────────────────
export const TOKEN_KEY   = "fnd_access_token";
export const REFRESH_KEY = "fnd_refresh_token";

// ── Verdict labels ─────────────────────────────────────────
export const VERDICT = {
  REAL:      "REAL",
  FAKE:      "FAKE",
  UNCERTAIN: "UNCERTAIN",
};

// ── Roles ──────────────────────────────────────────────────
export const ROLES = {
  USER:  "user",
  ADMIN: "admin",
};

// ── File upload ────────────────────────────────────────────
export const ACCEPTED_FILE_TYPES = {
  "application/pdf":  [".pdf"],
  "text/plain":       [".txt"],
};
export const MAX_FILE_SIZE_MB = 10;
export const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

// ── Pagination ─────────────────────────────────────────────
export const DEFAULT_PAGE_SIZE = 10;

// ── Theme ──────────────────────────────────────────────────
export const THEME = {
  LIGHT: "light",
  DARK:  "dark",
};
export const THEME_KEY = "fnd_theme";

// ── Toast durations ────────────────────────────────────────
export const TOAST_DURATION = {
  SHORT:  2000,
  MEDIUM: 4000,
  LONG:   6000,
};
```

### `src/constants/routes.js`

```js
export const ROUTES = {
  // Public
  HOME:     "/",
  LOGIN:    "/login",
  REGISTER: "/register",
  ABOUT:    "/about",

  // Protected
  DASHBOARD:    "/dashboard",
  ANALYZER:     "/analyzer",
  URL_ANALYZER: "/url-analyzer",
  FILE_ANALYZER:"/file-analyzer",
  HISTORY:      "/history",
  PROFILE:      "/profile",
  SETTINGS:     "/settings",

  // Admin
  ADMIN:         "/admin",
  ADMIN_USERS:   "/admin/users",
  ADMIN_REPORTS: "/admin/reports",

  // Error
  NOT_FOUND: "*",
};
```

---

## PHASE 8 — Utility Functions

### `src/utils/helpers.js`

```js
import { format, formatDistanceToNow } from "date-fns";
import { clsx } from "clsx";
import { VERDICT } from "@constants";

// ── Classname merge helper ─────────────────────────────────
export const cn = (...inputs) => clsx(inputs);

// ── Date formatting ────────────────────────────────────────
export const formatDate = (date, pattern = "MMM dd, yyyy") =>
  format(new Date(date), pattern);

export const timeAgo = (date) =>
  formatDistanceToNow(new Date(date), { addSuffix: true });

// ── Verdict helpers ────────────────────────────────────────
export const getVerdictColor = (verdict) => {
  const map = {
    [VERDICT.REAL]:      "text-green-600 dark:text-green-400",
    [VERDICT.FAKE]:      "text-red-600   dark:text-red-400",
    [VERDICT.UNCERTAIN]: "text-amber-600 dark:text-amber-400",
  };
  return map[verdict] ?? "text-slate-600 dark:text-slate-400";
};

export const getVerdictBadgeClass = (verdict) => {
  const map = {
    [VERDICT.REAL]:      "badge-real",
    [VERDICT.FAKE]:      "badge-fake",
    [VERDICT.UNCERTAIN]: "badge-uncertain",
  };
  return map[verdict] ?? "badge";
};

export const getConfidenceColor = (score) => {
  if (score >= 80) return "#22c55e";
  if (score >= 50) return "#f59e0b";
  return "#ef4444";
};

// ── String helpers ─────────────────────────────────────────
export const truncate = (str, maxLen = 120) =>
  str.length <= maxLen ? str : str.slice(0, maxLen).trimEnd() + "…";

export const capitalize = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();

// ── File helpers ───────────────────────────────────────────
export const formatFileSize = (bytes) => {
  if (bytes < 1024)       return `${bytes} B`;
  if (bytes < 1024 ** 2)  return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 ** 2).toFixed(1)} MB`;
};

export const isValidUrl = (url) => {
  try { new URL(url); return true; }
  catch { return false; }
};

// ── Token helpers ──────────────────────────────────────────
export const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split(".")[1]));
  } catch {
    return null;
  }
};

export const isTokenExpired = (token) => {
  const payload = parseJwt(token);
  if (!payload?.exp) return true;
  return Date.now() >= payload.exp * 1000;
};
```

---

## PHASE 9 — Axios API Layer

### `src/services/axiosInstance.js`

```js
import axios from "axios";
import { TOKEN_KEY, REFRESH_KEY } from "@constants";
import { isTokenExpired } from "@utils/helpers";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    "Accept":       "application/json",
  },
});

// ── Request interceptor ────────────────────────────────────
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token && !isTokenExpired(token)) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// ── Response interceptor ───────────────────────────────────
axiosInstance.interceptors.response.use(
  (response) => response.data,

  async (error) => {
    const original = error.config;

    // Token expired → attempt refresh once
    if (error.response?.status === 401 && !original._retry) {
      original._retry = true;
      const refreshToken = localStorage.getItem(REFRESH_KEY);

      if (refreshToken) {
        try {
          const { data } = await axios.post(
            `${import.meta.env.VITE_API_URL}/auth/refresh`,
            { refreshToken }
          );
          localStorage.setItem(TOKEN_KEY, data.accessToken);
          original.headers.Authorization = `Bearer ${data.accessToken}`;
          return axiosInstance(original);
        } catch {
          // Refresh failed — clear session
          localStorage.removeItem(TOKEN_KEY);
          localStorage.removeItem(REFRESH_KEY);
          window.location.href = "/login";
        }
      }
    }

    // Normalise error shape
    const message =
      error.response?.data?.message ??
      error.message ??
      "An unexpected error occurred";

    return Promise.reject({ message, status: error.response?.status });
  }
);

export default axiosInstance;
```

### `src/services/authService.js`

```js
import api from "./axiosInstance";
import { API_ENDPOINTS, TOKEN_KEY, REFRESH_KEY } from "@constants";

const authService = {
  /** POST /api/auth/register */
  register: (payload) => api.post(API_ENDPOINTS.AUTH.REGISTER, payload),

  /** POST /api/auth/login */
  login: async (payload) => {
    const data = await api.post(API_ENDPOINTS.AUTH.LOGIN, payload);
    localStorage.setItem(TOKEN_KEY,   data.accessToken);
    localStorage.setItem(REFRESH_KEY, data.refreshToken);
    return data;
  },

  /** POST /api/auth/logout */
  logout: async () => {
    await api.post(API_ENDPOINTS.AUTH.LOGOUT).catch(() => {});
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_KEY);
  },

  /** GET /api/auth/profile */
  getProfile: () => api.get(API_ENDPOINTS.AUTH.PROFILE),
};

export default authService;
```

### `src/services/newsService.js`

```js
import api from "./axiosInstance";
import { API_ENDPOINTS } from "@constants";

const newsService = {
  /** POST /api/news/analyze — plain text */
  analyzeText: (text) =>
    api.post(API_ENDPOINTS.NEWS.ANALYZE, { text }),

  /** POST /api/news/url — URL string */
  analyzeUrl: (url) =>
    api.post(API_ENDPOINTS.NEWS.URL, { url }),

  /** POST /api/news/upload — multipart file */
  analyzeFile: (file) => {
    const form = new FormData();
    form.append("file", file);
    return api.post(API_ENDPOINTS.NEWS.UPLOAD, form, {
      headers: { "Content-Type": "multipart/form-data" },
    });
  },
};

export default newsService;
```

### `src/services/historyService.js`

```js
import api from "./axiosInstance";
import { API_ENDPOINTS } from "@constants";

const historyService = {
  getHistory: (page = 1, limit = 10) =>
    api.get(API_ENDPOINTS.HISTORY.LIST, { params: { page, limit } }),

  deleteEntry: (id) =>
    api.delete(API_ENDPOINTS.HISTORY.DELETE(id)),

  clearHistory: () =>
    api.delete(API_ENDPOINTS.HISTORY.CLEAR),
};

export default historyService;
```

---

## PHASE 10 — Redux Store

### `src/redux/store.js`

```js
import { configureStore } from "@reduxjs/toolkit";
import authReducer    from "./slices/authSlice";
import newsReducer    from "./slices/newsSlice";
import historyReducer from "./slices/historySlice";
import userReducer    from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    auth:    authReducer,
    news:    newsReducer,
    history: historyReducer,
    user:    userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: import.meta.env.DEV,
});

// Typed helpers (JSDoc — no TS required)
/** @returns {import('@reduxjs/toolkit').ThunkDispatch} */
export const useAppDispatch = () => store.dispatch;
```

### `src/redux/slices/authSlice.js`

```js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "@services/authService";
import { TOKEN_KEY } from "@constants";
import { parseJwt } from "@utils/helpers";

// ── Initial state ──────────────────────────────────────────
const token = localStorage.getItem(TOKEN_KEY);
const decoded = parseJwt(token);

const initialState = {
  user:        decoded ?? null,
  token:       token ?? null,
  isAuth:      !!token,
  loading:     false,
  error:       null,
};

// ── Async thunks ───────────────────────────────────────────
export const registerUser = createAsyncThunk(
  "auth/register",
  async (payload, { rejectWithValue }) => {
    try { return await authService.register(payload); }
    catch (err) { return rejectWithValue(err.message); }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (payload, { rejectWithValue }) => {
    try { return await authService.login(payload); }
    catch (err) { return rejectWithValue(err.message); }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try { return await authService.logout(); }
    catch (err) { return rejectWithValue(err.message); }
  }
);

// ── Slice ──────────────────────────────────────────────────
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => { state.error = null; },
  },
  extraReducers: (builder) => {
    // Register
    builder
      .addCase(registerUser.pending,   (state) => { state.loading = true; state.error = null; })
      .addCase(registerUser.fulfilled, (state) => { state.loading = false; })
      .addCase(registerUser.rejected,  (state, { payload }) => { state.loading = false; state.error = payload; });

    // Login
    builder
      .addCase(loginUser.pending,   (state) => { state.loading = true; state.error = null; })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.token   = payload.accessToken;
        state.user    = parseJwt(payload.accessToken);
        state.isAuth  = true;
      })
      .addCase(loginUser.rejected,  (state, { payload }) => { state.loading = false; state.error = payload; });

    // Logout
    builder
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null; state.token = null; state.isAuth = false;
      });
  },
});

export const { clearError } = authSlice.actions;
export default authSlice.reducer;

// ── Selectors ──────────────────────────────────────────────
export const selectAuth     = (state) => state.auth;
export const selectUser     = (state) => state.auth.user;
export const selectIsAuth   = (state) => state.auth.isAuth;
export const selectAuthLoad = (state) => state.auth.loading;
export const selectAuthErr  = (state) => state.auth.error;
```

### `src/redux/slices/newsSlice.js`

```js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import newsService from "@services/newsService";

const initialState = {
  result:  null,
  loading: false,
  error:   null,
  mode:    "text", // "text" | "url" | "file"
};

export const analyzeText = createAsyncThunk(
  "news/analyzeText",
  async (text, { rejectWithValue }) => {
    try { return await newsService.analyzeText(text); }
    catch (err) { return rejectWithValue(err.message); }
  }
);

export const analyzeUrl = createAsyncThunk(
  "news/analyzeUrl",
  async (url, { rejectWithValue }) => {
    try { return await newsService.analyzeUrl(url); }
    catch (err) { return rejectWithValue(err.message); }
  }
);

export const analyzeFile = createAsyncThunk(
  "news/analyzeFile",
  async (file, { rejectWithValue }) => {
    try { return await newsService.analyzeFile(file); }
    catch (err) { return rejectWithValue(err.message); }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    setMode:      (state, { payload }) => { state.mode = payload; },
    clearResult:  (state) => { state.result = null; state.error = null; },
    clearError:   (state) => { state.error = null; },
  },
  extraReducers: (builder) => {
    const pending   = (state) => { state.loading = true; state.error = null; state.result = null; };
    const fulfilled = (state, { payload }) => { state.loading = false; state.result = payload; };
    const rejected  = (state, { payload }) => { state.loading = false; state.error = payload; };

    [analyzeText, analyzeUrl, analyzeFile].forEach((thunk) => {
      builder
        .addCase(thunk.pending,   pending)
        .addCase(thunk.fulfilled, fulfilled)
        .addCase(thunk.rejected,  rejected);
    });
  },
});

export const { setMode, clearResult, clearError } = newsSlice.actions;
export default newsSlice.reducer;

export const selectNewsResult  = (state) => state.news.result;
export const selectNewsLoading = (state) => state.news.loading;
export const selectNewsError   = (state) => state.news.error;
export const selectNewsMode    = (state) => state.news.mode;
```

### `src/redux/slices/historySlice.js`

```js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import historyService from "@services/historyService";

const initialState = {
  items:   [],
  total:   0,
  page:    1,
  loading: false,
  error:   null,
};

export const fetchHistory = createAsyncThunk(
  "history/fetch",
  async ({ page = 1, limit = 10 } = {}, { rejectWithValue }) => {
    try { return await historyService.getHistory(page, limit); }
    catch (err) { return rejectWithValue(err.message); }
  }
);

export const deleteHistory = createAsyncThunk(
  "history/delete",
  async (id, { rejectWithValue }) => {
    try { await historyService.deleteEntry(id); return id; }
    catch (err) { return rejectWithValue(err.message); }
  }
);

export const clearAllHistory = createAsyncThunk(
  "history/clearAll",
  async (_, { rejectWithValue }) => {
    try { return await historyService.clearHistory(); }
    catch (err) { return rejectWithValue(err.message); }
  }
);

const historySlice = createSlice({
  name: "history",
  initialState,
  reducers: {
    setPage: (state, { payload }) => { state.page = payload; },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHistory.pending,   (state) => { state.loading = true; })
      .addCase(fetchHistory.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.items   = payload.items;
        state.total   = payload.total;
      })
      .addCase(fetchHistory.rejected,  (state, { payload }) => { state.loading = false; state.error = payload; })

      .addCase(deleteHistory.fulfilled, (state, { payload }) => {
        state.items = state.items.filter((i) => i._id !== payload);
      })
      .addCase(clearAllHistory.fulfilled, (state) => {
        state.items = []; state.total = 0;
      });
  },
});

export const { setPage } = historySlice.actions;
export default historySlice.reducer;

export const selectHistory        = (state) => state.history.items;
export const selectHistoryTotal   = (state) => state.history.total;
export const selectHistoryLoading = (state) => state.history.loading;
```

### `src/redux/slices/userSlice.js`

```js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authService from "@services/authService";

const initialState = {
  profile: null,
  loading: false,
  error:   null,
};

export const fetchProfile = createAsyncThunk(
  "user/profile",
  async (_, { rejectWithValue }) => {
    try { return await authService.getProfile(); }
    catch (err) { return rejectWithValue(err.message); }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateProfileLocally: (state, { payload }) => {
      state.profile = { ...state.profile, ...payload };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfile.pending,   (state) => { state.loading = true; })
      .addCase(fetchProfile.fulfilled, (state, { payload }) => { state.loading = false; state.profile = payload; })
      .addCase(fetchProfile.rejected,  (state, { payload }) => { state.loading = false; state.error = payload; });
  },
});

export const { updateProfileLocally } = userSlice.actions;
export default userSlice.reducer;

export const selectProfile        = (state) => state.user.profile;
export const selectProfileLoading = (state) => state.user.loading;
```

---

## PHASE 11 — Theme Context

### `src/context/ThemeContext.jsx`

```jsx
import { createContext, useContext, useEffect, useState } from "react";
import { THEME, THEME_KEY } from "@constants";

const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(
    () => localStorage.getItem(THEME_KEY) ?? THEME.LIGHT
  );

  useEffect(() => {
    const root = document.documentElement;
    if (theme === THEME.DARK) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === THEME.LIGHT ? THEME.DARK : THEME.LIGHT));

  const isDark = theme === THEME.DARK;

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within <ThemeProvider>");
  return ctx;
};
```

---

## PHASE 12 — Framer Motion Animations

### `src/animations/variants.js`

```js
// ── Page transitions ───────────────────────────────────────
export const pageVariants = {
  initial:  { opacity: 0, y: 16 },
  animate:  { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
  exit:     { opacity: 0, y: -8, transition: { duration: 0.2 } },
};

// ── Staggered children ─────────────────────────────────────
export const containerVariants = {
  hidden:  { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

export const itemVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

// ── Cards ──────────────────────────────────────────────────
export const cardVariants = {
  hidden:  { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1,   transition: { duration: 0.3 } },
  hover:   { scale: 1.02, transition: { duration: 0.2 } },
};

// ── Slide in from side ─────────────────────────────────────
export const slideInLeft = {
  initial:  { opacity: 0, x: -30 },
  animate:  { opacity: 1, x: 0, transition: { duration: 0.4 } },
  exit:     { opacity: 0, x: -20 },
};

export const slideInRight = {
  initial:  { opacity: 0, x: 30 },
  animate:  { opacity: 1, x: 0, transition: { duration: 0.4 } },
  exit:     { opacity: 0, x: 20 },
};

// ── Modal / overlay ────────────────────────────────────────
export const modalOverlayVariants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1 },
  exit:    { opacity: 0 },
};

export const modalVariants = {
  hidden:  { opacity: 0, scale: 0.9, y: 20 },
  visible: { opacity: 1, scale: 1,   y: 0, transition: { type: "spring", stiffness: 260, damping: 20 } },
  exit:    { opacity: 0, scale: 0.9, y: 20 },
};

// ── Spinner ────────────────────────────────────────────────
export const spinnerVariants = {
  animate: {
    rotate: 360,
    transition: { repeat: Infinity, duration: 0.8, ease: "linear" },
  },
};

// ── Verdict reveal ─────────────────────────────────────────
export const verdictVariants = {
  hidden:  { opacity: 0, scale: 0.7 },
  visible: {
    opacity: 1, scale: 1,
    transition: { type: "spring", stiffness: 300, damping: 18, delay: 0.2 },
  },
};
```

---

## PHASE 13 — Custom Hooks

### `src/hooks/useAuth.js`

```js
import { useSelector, useDispatch } from "react-redux";
import { selectIsAuth, selectUser, selectAuthLoad, selectAuthErr, logoutUser } from "@redux/slices/authSlice";

export const useAuth = () => {
  const dispatch   = useDispatch();
  const isAuth     = useSelector(selectIsAuth);
  const user       = useSelector(selectUser);
  const loading    = useSelector(selectAuthLoad);
  const error      = useSelector(selectAuthErr);
  const isAdmin    = user?.role === "admin";

  const logout = () => dispatch(logoutUser());

  return { isAuth, user, loading, error, isAdmin, logout };
};
```

### `src/hooks/useNews.js`

```js
import { useSelector, useDispatch } from "react-redux";
import {
  analyzeText, analyzeUrl, analyzeFile,
  clearResult, setMode,
  selectNewsResult, selectNewsLoading, selectNewsError, selectNewsMode,
} from "@redux/slices/newsSlice";

export const useNews = () => {
  const dispatch = useDispatch();
  const result   = useSelector(selectNewsResult);
  const loading  = useSelector(selectNewsLoading);
  const error    = useSelector(selectNewsError);
  const mode     = useSelector(selectNewsMode);

  return {
    result, loading, error, mode,
    setMode:       (m)    => dispatch(setMode(m)),
    clearResult:   ()     => dispatch(clearResult()),
    analyzeText:   (text) => dispatch(analyzeText(text)),
    analyzeUrl:    (url)  => dispatch(analyzeUrl(url)),
    analyzeFile:   (file) => dispatch(analyzeFile(file)),
  };
};
```

### `src/hooks/useLocalStorage.js`

```js
import { useState, useEffect } from "react";

export const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const toStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(toStore);
      localStorage.setItem(key, JSON.stringify(toStore));
    } catch (err) {
      console.error("useLocalStorage error:", err);
    }
  };

  return [storedValue, setValue];
};
```

---

## PHASE 14 — Routing

### `src/routes/ProtectedRoute.jsx`

```jsx
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "@hooks/useAuth";
import { ROUTES } from "@constants/routes";

const ProtectedRoute = () => {
  const { isAuth } = useAuth();
  const location   = useLocation();

  if (!isAuth) {
    return <Navigate to={ROUTES.LOGIN} state={{ from: location }} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
```

### `src/routes/AdminRoute.jsx`

```jsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@hooks/useAuth";
import { ROUTES } from "@constants/routes";

const AdminRoute = () => {
  const { isAuth, isAdmin } = useAuth();

  if (!isAuth)  return <Navigate to={ROUTES.LOGIN}     replace />;
  if (!isAdmin) return <Navigate to={ROUTES.DASHBOARD} replace />;

  return <Outlet />;
};

export default AdminRoute;
```

### `src/routes/PublicRoute.jsx`

```jsx
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "@hooks/useAuth";
import { ROUTES } from "@constants/routes";

/** Redirects already-authenticated users away from login/register */
const PublicRoute = () => {
  const { isAuth } = useAuth();
  return isAuth ? <Navigate to={ROUTES.DASHBOARD} replace /> : <Outlet />;
};

export default PublicRoute;
```

### `src/routes/AppRoutes.jsx`

```jsx
import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { ROUTES } from "@constants/routes";
import ProtectedRoute from "./ProtectedRoute";
import AdminRoute     from "./AdminRoute";
import PublicRoute    from "./PublicRoute";
import AppLayout      from "@layouts/AppLayout";
import AuthLayout     from "@layouts/AuthLayout";
import LoadingSpinner from "@components/ui/LoadingSpinner";

// ── Lazy page imports ──────────────────────────────────────
const LandingPage     = lazy(() => import("@pages/LandingPage"));
const LoginPage       = lazy(() => import("@pages/LoginPage"));
const RegisterPage    = lazy(() => import("@pages/RegisterPage"));
const Dashboard       = lazy(() => import("@pages/Dashboard"));
const AnalyzerPage    = lazy(() => import("@pages/AnalyzerPage"));
const UrlAnalyzer     = lazy(() => import("@pages/UrlAnalyzer"));
const FileAnalyzer    = lazy(() => import("@pages/FileAnalyzer"));
const HistoryPage     = lazy(() => import("@pages/HistoryPage"));
const ProfilePage     = lazy(() => import("@pages/ProfilePage"));
const SettingsPage    = lazy(() => import("@pages/SettingsPage"));
const AboutPage       = lazy(() => import("@pages/AboutPage"));
const AdminDashboard  = lazy(() => import("@pages/AdminDashboard"));
const NotFoundPage    = lazy(() => import("@pages/NotFoundPage"));

const Fallback = () => (
  <div className="flex h-screen items-center justify-center">
    <LoadingSpinner size="lg" />
  </div>
);

const AppRoutes = () => (
  <Suspense fallback={<Fallback />}>
    <Routes>
      {/* Public – landing & about */}
      <Route path={ROUTES.HOME}  element={<LandingPage />} />
      <Route path={ROUTES.ABOUT} element={<AboutPage />} />

      {/* Auth – redirect if already logged in */}
      <Route element={<PublicRoute />}>
        <Route element={<AuthLayout />}>
          <Route path={ROUTES.LOGIN}    element={<LoginPage />} />
          <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
        </Route>
      </Route>

      {/* Protected – require login */}
      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          <Route path={ROUTES.DASHBOARD}     element={<Dashboard />} />
          <Route path={ROUTES.ANALYZER}      element={<AnalyzerPage />} />
          <Route path={ROUTES.URL_ANALYZER}  element={<UrlAnalyzer />} />
          <Route path={ROUTES.FILE_ANALYZER} element={<FileAnalyzer />} />
          <Route path={ROUTES.HISTORY}       element={<HistoryPage />} />
          <Route path={ROUTES.PROFILE}       element={<ProfilePage />} />
          <Route path={ROUTES.SETTINGS}      element={<SettingsPage />} />
        </Route>
      </Route>

      {/* Admin */}
      <Route element={<AdminRoute />}>
        <Route element={<AppLayout />}>
          <Route path={ROUTES.ADMIN}         element={<AdminDashboard />} />
          <Route path={ROUTES.ADMIN_USERS}   element={<AdminDashboard />} />
          <Route path={ROUTES.ADMIN_REPORTS} element={<AdminDashboard />} />
        </Route>
      </Route>

      {/* 404 */}
      <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} />
    </Routes>
  </Suspense>
);

export default AppRoutes;
```

---

## PHASE 15 — Layouts

### `src/layouts/AuthLayout.jsx`

```jsx
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { pageVariants } from "@animations/variants";

const AuthLayout = () => (
  <div className="min-h-screen bg-gradient-to-br from-primary-950 via-slate-900 to-violet-950 flex items-center justify-center p-4">
    {/* Decorative blobs */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-primary-700/20 blur-3xl" />
      <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-violet-700/20 blur-3xl" />
    </div>

    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative z-10 w-full max-w-md"
    >
      {/* Logo */}
      <div className="mb-8 text-center">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-600 mb-3">
          <span className="text-2xl">🔍</span>
        </div>
        <h1 className="text-2xl font-display font-bold text-white">FakeNews<span className="text-primary-400">Detector</span></h1>
      </div>

      {/* Card */}
      <div className="glass rounded-3xl p-8">
        <Outlet />
      </div>
    </motion.div>
  </div>
);

export default AuthLayout;
```

### `src/layouts/AppLayout.jsx`

```jsx
import { Outlet } from "react-router-dom";
import { useState } from "react";
import Navbar  from "@components/common/Navbar";
import Sidebar from "@components/common/Sidebar";
import { motion } from "framer-motion";
import { pageVariants } from "@animations/variants";

const AppLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-surface-light dark:bg-surface-dark">
      {/* Sidebar */}
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <Navbar onMenuClick={() => setSidebarOpen(true)} />

        <main className="flex-1 overflow-y-auto">
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="page-container"
          >
            <Outlet />
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
```

---

## PHASE 16 — Core UI Components

### `src/components/ui/LoadingSpinner.jsx`

```jsx
import { motion } from "framer-motion";
import { spinnerVariants } from "@animations/variants";
import { cn } from "@utils/helpers";

const sizes = {
  sm: "h-4 w-4 border-2",
  md: "h-8 w-8 border-2",
  lg: "h-12 w-12 border-3",
};

const LoadingSpinner = ({ size = "md", className }) => (
  <motion.div
    variants={spinnerVariants}
    animate="animate"
    className={cn(
      "rounded-full border-primary-200 border-t-primary-600 dark:border-slate-700 dark:border-t-primary-400",
      sizes[size],
      className
    )}
  />
);

export default LoadingSpinner;
```

### `src/components/common/Navbar.jsx`

```jsx
import { Link } from "react-router-dom";
import { HiMenu, HiBell } from "react-icons/hi";
import { useAuth }  from "@hooks/useAuth";
import { useTheme } from "@context/ThemeContext";
import { HiSun, HiMoon } from "react-icons/hi2";

const Navbar = ({ onMenuClick }) => {
  const { user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-border-light dark:border-border-dark bg-card-light/80 dark:bg-card-dark/80 backdrop-blur px-4 sm:px-6">
      {/* Mobile hamburger */}
      <button onClick={onMenuClick} className="btn-ghost btn-sm lg:hidden">
        <HiMenu className="h-5 w-5" />
      </button>

      {/* Logo */}
      <Link to="/dashboard" className="flex items-center gap-2 font-display font-bold text-lg text-slate-900 dark:text-white no-underline">
        🔍 <span className="hidden sm:block">FakeNewsDetector</span>
      </Link>

      <div className="ml-auto flex items-center gap-2">
        {/* Theme toggle */}
        <button onClick={toggleTheme} className="btn-ghost btn-sm" aria-label="Toggle theme">
          {isDark ? <HiSun className="h-4 w-4" /> : <HiMoon className="h-4 w-4" />}
        </button>

        {/* Notifications placeholder */}
        <button className="btn-ghost btn-sm relative">
          <HiBell className="h-4 w-4" />
          <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-red-500" />
        </button>

        {/* Avatar */}
        <button
          onClick={logout}
          className="flex items-center gap-2 rounded-xl px-3 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
        >
          <div className="h-7 w-7 rounded-full bg-primary-600 flex items-center justify-center text-xs font-bold text-white">
            {user?.name?.[0]?.toUpperCase() ?? "U"}
          </div>
          <span className="hidden sm:block">{user?.name ?? "User"}</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
```

### `src/components/common/Sidebar.jsx`

```jsx
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ROUTES } from "@constants/routes";
import { useAuth } from "@hooks/useAuth";
import { cn } from "@utils/helpers";
import {
  HiHome, HiSearch, HiLink, HiUpload,
  HiClock, HiUser, HiCog, HiShieldCheck, HiX,
} from "react-icons/hi";

const navItems = [
  { label: "Dashboard",     icon: HiHome,       to: ROUTES.DASHBOARD },
  { label: "Analyze Text",  icon: HiSearch,     to: ROUTES.ANALYZER },
  { label: "Analyze URL",   icon: HiLink,       to: ROUTES.URL_ANALYZER },
  { label: "Upload File",   icon: HiUpload,     to: ROUTES.FILE_ANALYZER },
  { label: "History",       icon: HiClock,      to: ROUTES.HISTORY },
  { label: "Profile",       icon: HiUser,       to: ROUTES.PROFILE },
  { label: "Settings",      icon: HiCog,        to: ROUTES.SETTINGS },
];

const adminItems = [
  { label: "Admin Panel", icon: HiShieldCheck, to: ROUTES.ADMIN },
];

const SidebarLink = ({ to, icon: Icon, label, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
    className={({ isActive }) =>
      cn("sidebar-link", isActive && "sidebar-link-active")
    }
  >
    <Icon className="h-5 w-5 flex-shrink-0" />
    <span>{label}</span>
  </NavLink>
);

const Sidebar = ({ open, onClose }) => {
  const { isAdmin } = useAuth();

  const content = (
    <nav className="flex flex-col h-full py-4 px-3 gap-1">
      <div className="px-3 mb-4 flex items-center justify-between lg:hidden">
        <span className="font-display font-bold text-slate-900 dark:text-white">Menu</span>
        <button onClick={onClose} className="btn-ghost btn-sm"><HiX className="h-5 w-5" /></button>
      </div>

      {navItems.map((item) => (
        <SidebarLink key={item.to} {...item} onClick={onClose} />
      ))}

      {isAdmin && (
        <>
          <div className="my-3 h-px bg-border-light dark:bg-border-dark" />
          {adminItems.map((item) => (
            <SidebarLink key={item.to} {...item} onClick={onClose} />
          ))}
        </>
      )}
    </nav>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-64 flex-shrink-0 flex-col border-r border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark">
        {content}
      </aside>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={onClose}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
            />
            <motion.aside
              initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed left-0 top-0 z-50 h-full w-72 bg-card-light dark:bg-card-dark shadow-xl lg:hidden"
            >
              {content}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
```

---

## PHASE 17 — Main Entry Files

### `src/main.jsx`

```jsx
import React       from "react";
import ReactDOM    from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { store }   from "@redux/store";
import { ThemeProvider } from "@context/ThemeContext";
import App         from "./App";
import "./styles/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <BrowserRouter>
          <App />
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                borderRadius: "12px",
                fontSize: "14px",
              },
              success: { iconTheme: { primary: "#22c55e", secondary: "#fff" } },
              error:   { iconTheme: { primary: "#ef4444", secondary: "#fff" } },
            }}
          />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
```

### `src/App.jsx`

```jsx
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import AppRoutes from "@/routes/AppRoutes";

const App = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <AppRoutes key={location.pathname} />
    </AnimatePresence>
  );
};

export default App;
```

---

## PHASE 18 — ESLint Configuration

### `eslint.config.js`

```js
import js          from "@eslint/js";
import globals     from "globals";
import reactHooks  from "eslint-plugin-react-hooks";
import reactPlugin from "eslint-plugin-react";

export default [
  { ignores: ["dist", "node_modules"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      globals: { ...globals.browser, ...globals.es2021 },
      parserOptions: {
        ecmaFeatures: { jsx: true },
        sourceType: "module",
      },
    },
    plugins: {
      "react":       reactPlugin,
      "react-hooks": reactHooks,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...reactPlugin.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types":         "warn",
      "no-unused-vars":           "warn",
      "no-console":               ["warn", { allow: ["warn", "error"] }],
    },
    settings: { react: { version: "detect" } },
  },
];
```

---

## PHASE 19 — index.html

### `index.html`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="AI-powered fake news detection system" />
    <meta name="theme-color" content="#2563eb" />
    <title>FakeNews Detector</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

---

## PHASE 20 — Naming & Import Conventions

```
Components:   PascalCase   →  NewsInputForm.jsx
Hooks:        camelCase    →  useAuth.js
Slices:       camelCase    →  authSlice.js
Services:     camelCase    →  authService.js
Constants:    UPPER_SNAKE  →  TOKEN_KEY
CSS classes:  kebab-case   →  btn-primary
Route paths:  kebab-case   →  /url-analyzer

Import order (enforced by ESLint):
  1. React / react-dom
  2. Third-party libraries
  3. @redux / @services / @hooks / @context
  4. @components / @pages / @layouts
  5. @constants / @utils / @animations
  6. Relative imports
  7. CSS
```

---

## PHASE 21 — Final Run Commands

```bash
# Start dev server (http://localhost:3000)
npm run dev

# Lint the project
npm run lint

# Production build → ./dist
npm run build

# Preview production build locally
npm run preview
```

### Vercel Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set env var in Vercel dashboard:
# VITE_API_URL = https://your-backend.onrender.com/api
```

### `vercel.json` (SPA routing fix)

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }],
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

---

## Summary — Files Created

| File | Purpose |
|---|---|
| `vite.config.js` | Aliases, proxy, code splitting |
| `tailwind.config.js` | Design tokens, dark mode |
| `postcss.config.js` | Tailwind pipeline |
| `src/styles/index.css` | Global styles, component classes |
| `src/main.jsx` | App bootstrap, providers |
| `src/App.jsx` | AnimatePresence + Routes |
| `src/constants/index.js` | App-wide string constants |
| `src/constants/routes.js` | Route paths |
| `src/utils/helpers.js` | Pure utility functions |
| `src/context/ThemeContext.jsx` | Dark/light mode |
| `src/animations/variants.js` | Framer Motion variants |
| `src/services/axiosInstance.js` | JWT interceptors |
| `src/services/authService.js` | Auth API calls |
| `src/services/newsService.js` | Analysis API calls |
| `src/services/historyService.js` | History API calls |
| `src/redux/store.js` | Redux store |
| `src/redux/slices/authSlice.js` | Auth state + thunks |
| `src/redux/slices/newsSlice.js` | Analysis state + thunks |
| `src/redux/slices/historySlice.js` | History state + thunks |
| `src/redux/slices/userSlice.js` | User profile state |
| `src/hooks/useAuth.js` | Auth selector hook |
| `src/hooks/useNews.js` | News selector hook |
| `src/hooks/useLocalStorage.js` | LocalStorage hook |
| `src/routes/AppRoutes.jsx` | Route tree |
| `src/routes/ProtectedRoute.jsx` | Login guard |
| `src/routes/AdminRoute.jsx` | Admin guard |
| `src/routes/PublicRoute.jsx` | Auth redirect |
| `src/layouts/AppLayout.jsx` | Dashboard shell |
| `src/layouts/AuthLayout.jsx` | Login/register shell |
| `src/components/common/Navbar.jsx` | Top navbar |
| `src/components/common/Sidebar.jsx` | Nav sidebar (responsive) |
| `src/components/ui/LoadingSpinner.jsx` | Animated spinner |
| `eslint.config.js` | Lint rules |
| `.env` / `.env.example` | Env variables |
| `vercel.json` | Deployment config |

> **Next module:** Pages + Business Logic Components (Dashboard, Analyzer, Result Card, Confidence Meter, History Table, Admin Dashboard)
