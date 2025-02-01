# Project Documentation

## 1. Overview
This project is a **Next.js 14 application** that efficiently handles **SSR, caching, API calls, and global state management** using **React Query, Zustand, and ShadCN UI components**.

- **Optimized SSR & SEO**: Uses `getQueryClient.ts` to **cache API responses** for **better performance & SEO**.
- **Custom API Proxy**: Resolves CORS issues using a Next.js API route.
- **State Management**: Implements Zustand for global state handling.
- **React Query Hydration**: Prefetches API responses on the server & hydrates them on the client.
- **Optimized Quiz Flow**: Handles quiz responses, countdown timers, and UI updates dynamically.

  ## Project Demo
[![Project Demo Video](https://i.postimg.cc/JzFTG8rk/image.png)](https://youtu.be/FAVI8C1tNB4)

## User Interface

### Quiz Flow Screenshots
<div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
  <img src="https://i.postimg.cc/fbfL22S8/Screenshot-98.png" alt="Start Screen" width="48%"/>
  <img src="https://i.postimg.cc/P5ZNZrXs/Screenshot-100.png" alt="Quiz Interface" width="48%"/>
</div>

<div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
  <img src="https://i.postimg.cc/vHCcc6dt/Screenshot-99.png" alt="Quiz Interface - After" width="48%"/>
  <img src="https://i.postimg.cc/2SYkgpRn/image.png" alt="Detailed Results" width="48%"/>
</div>

<div style="display: flex; justify-content: space-between; margin-bottom: 20px;">
  <img src="https://i.postimg.cc/bNx8x6Dr/image.png" alt="Quiz Interface - After" width="48%"/>
  <img src="https://i.postimg.cc/J4JW5pFv/Screenshot-2025-02-01-022750.png" alt="Detailed Results" width="48%"/>
</div>

---

## 2. Installation & Setup

### Prerequisites:
- Node.js 18+
- Yarn or npm

### Installation:
```bash
# Clone the repository
git clone <repo-url>
cd <repo-folder>

# Install dependencies
npm install  

# Start the development server
npm run dev 

# set environment variable
NEXT_PUBLIC_SERVER_API_URI = <API_URI>
```

---

## 3. Folder & File Structure
### **Project Tree Representation**
```plaintext
src/
|-- app/
|   |-- home/
|   |   |-- page.tsx
|   |-- api/proxy/
|   |   |-- route.ts
|   |-- layout.tsx
|   |-- globals.css
|   |-- not-found.tsx
|
|-- api/
|   |-- quizResponse.ts
|
|-- components/
|   |-- common/
|   |   |-- QueryClientProvider.tsx
|   |   |-- QuizScreenNavigator.tsx
|   |-- quiz/
|   |   |-- StartScreen.tsx
|   |   |-- CountDown.tsx
|   |   |-- Question.tsx
|   |   |-- Results.tsx
|   |-- ui/ (ShadCN UI components)
|
|-- lib/
|   |-- types/
|   |-- stores/
|
|-- utils/
|   |-- constraints.ts
|   |-- functions/
|       |-- getQueryClient.ts
|       |-- formatText.ts
```

---

## 4. Feature Workflow & Explanation

### **(A) Server-Side API Handling & Caching**
- **File:** `utils/functions/getQueryClient.ts`
- **Purpose:** Creates a cached instance of `QueryClient` to **cache API responses server-side**.
- **Why?**
  - Enhances **SSR performance**.
  - Boosts **SEO** by preloading API responses.
  - Reduces redundant API calls by sharing **the same cache** between SSR and Client components.

---

### **(B) Handling CORS with API Proxy**
- **File:** `app/api/proxy/route.ts`
- **Purpose:** Acts as a proxy between the client and the actual API to **bypass CORS restrictions**.
- **How?**
  - Calls the backend ServerURI and returns the response without CORS issues.
  - This avoids frontend CORS errors and allows secure API access.

---

### **(C) React Query Hydration for SSR**
- **File:** `app/home/page.tsx`
- **Purpose:** Uses `HydrationBoundary` to **pass pre-fetched API data** from server-side caching to client-side components.
- **Flow:**
  1. The **server** fetches API responses & caches them.
  2. The **client** reuses the same cached data, avoiding duplicate API calls.

---

### **(D) Global State Management with Zustand**
- **Folder:** `lib/stores`
- **Purpose:** Manages global app state using **Zustand**.
- **Why?**
  - Allows modular state management.
  - Reduces prop drilling & unnecessary re-renders.
  - Stores quiz states like **current question, user responses, and progress**.

---

### **(E) Optimized Quiz Flow**
#### **1. Start Screen (`StartScreen.tsx`)**
- Uses React Query to fetch quiz data **efficiently**.
- Implements **caching** to avoid redundant API calls.

#### **2. Countdown Timer (`CountDown.tsx`)**
- Manages **dynamic countdown timers**.
- Syncs with global state to track quiz duration.

#### **3. Question Handling (`Question.tsx`)**
- Fetches **new questions** dynamically.
- Tracks **user selections** and updates state.

#### **4. Results (`Results.tsx`)**
- Evaluates **user answers**.
- Displays **final score** with detailed breakdown.

---

## 5. API Handling & Integration
- **File:** `api/quizResponse.ts`
- **Function:** Calls the **custom proxy API** (`/api/proxy`) to fetch quiz responses from the server.
- **Optimized:** Uses **React Query** for caching & automatic refetching.

---

## 6. Styling with ShadCN UI
- **Folder:** `components/ui/`
- **Purpose:** Stores reusable UI components styled using **ShadCN (Tailwind-based styling)**.
- **Why?**
  - Ensures a **consistent design system**.
  - Improves UI scalability & maintainability.

---

## 7. Constants & Helper Functions
- **File:** `utils/constraints.ts`
  - Stores **environment variables** like `NEXT_PUBLIC_SERVER_API_URI`.

- **File:** `utils/functions/formatText.ts`
  - Formats **HTML strings** for properly displaying quiz explanations (bold, italic text, etc.).

---

## 8. Contribution Guide
### **Want to Contribute?**
- Fork the repository.
- Create a new branch (`feature-xyz`).
- Commit & push changes.
- Open a pull request.

---

## 9. FAQs
**Q: How is SEO handled in this app?**  
A: SEO is improved by **pre-fetching API responses server-side** using `getQueryClient.ts`, ensuring search engines can crawl fully rendered pages.

**Q: What happens if the API fails?**  
A: React Query handles API errors gracefully and can implement automatic retries.

**Q: Can I extend this project?**  
A: Yes! The modular architecture allows adding new features with minimal changes.

---

## 10. Final Thoughts
This documentation provides a detailed breakdown of the project's **file structure, feature workflows, API handling, global state management, and optimization strategies**.

For further improvements or inquiries, feel free to contribute or raise an issue!

🚀 **Happy Coding!**

