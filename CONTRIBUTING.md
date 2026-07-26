# 🤝 Contributing to AI Study Planner

Thank you for choosing to contribute to the AI Study Planner project! This guide will help you set up the development environment, understand our git workflow, and submit high-quality changes.

---

## 🛠️ Local Development Setup

### 1. Prerequisites
- **Node.js** v18+ or v20+
- **npm** v9+ (or `pnpm`, `yarn`)
- **Git**

### 2. Installation
Clone the repository and install the dependencies:
```bash
git clone https://github.com/Farhodoff/study_planner.git
cd study_planner
npm install
```

### 3. Environment Variables
Copy the template and configure your Supabase local or cloud credentials:
```bash
cp .env.example .env
```
Inside `.env`, configure the following fields:
```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anonymous_key
```

### 4. Running the App Locally
Start the local development server:
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

---

## 🧪 Testing and Linting

We maintain 100% test passes and strict typing constraints:
* **Run Vitest Tests**: `npm run test` or `npx vitest run`
* **TypeScript Typecheck**: `npm run typecheck`
* **Linter Checking**: `npm run lint`

Please ensure that you check your modifications with both `typecheck` and `test` before committing.

---

## 🌿 Git Branching & Commit Guidelines

### 1. Branch Names
Use clear, descriptive branch prefixes:
- `feat/feature-name` (for new features)
- `fix/bug-fix-name` (for resolving errors)
- `docs/doc-updates` (for documentation)
- `test/test-improvements` (for writing tests)

### 2. Commit Message Guidelines
We follow conventional commits structure:
- `feat(ui): add visual charts to analytics`
- `fix(coach): resolve speech recognition timeout`
- `test(sub): add subscription validation test`

---

## 📬 Pull Request Process

1. Create a branch from `main`.
2. Implement your changes, keeping coding styles premium and consistent.
3. Verify typechecks (`npm run typecheck`) and tests (`npm run test`).
4. Push your branch to GitHub and create a Pull Request.
5. Provide a summary of changes, screenshot previews (if UI was altered), and test verification logs in the PR description.
