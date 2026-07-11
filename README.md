# 🚀 Study Planner & AI Mastery Platform

![Study Planner Banner](https://via.placeholder.com/1200x400.png?text=Study+Planner+%26+AI+Platform)

A comprehensive, full-stack learning management and productivity application designed to help students and professionals organize their studies, master complex topics with AI, and collaborate in real-time. 

Built with modern web technologies, this project showcases advanced React patterns, real-time synchronization, and AI integration.

---

## 🇯🇵 日本語の概要 (Japanese Overview)
本プロジェクト「Study Planner」は、学生や社会人が効率的に学習を進めるためのフルスタック学習管理・生産性向上アプリケーションです。

**主な機能：**
- **AI モック面接 (AI Mock Interview):** 音声認識（Web Speech API）と DeepSeek AI を活用した、日本語でのIT企業面接シミュレーター機能。敬語や文法のフィードバックをリアルタイムで提供します。
- **リアルタイム学習ルーム (Study Room):** WebRTCを利用したP2Pのビデオ通話、画面共有、さらに `tldraw` を用いたリアルタイム共有ホワイトボード機能。
- **ポモドーロ＆タスク管理 (Task & Pomodoro):** Supabaseと連携したデータ同期、ドラッグ＆ドロップ（DnD）対応のカンバンボード。
- **AI アシスタント (AI Features):** Gemini 2.0 Flash / DeepSeek を活用した自動学習プラン作成、フラッシュカード生成、マインドマップ出力機能。

フロントエンドにはReact (Vite) と Tailwind CSS、バックエンド（BaaS）にはSupabaseを採用し、高速かつセキュアなアプリケーションアーキテクチャを実現しています。

---

## ✨ Key Features

*   🤖 **AI-Powered Learning:** 
    *   **Auto-Flashcards:** Instantly generates Anki-style flashcards from notes.
    *   **Study Plan Generator:** Creates dynamic, tailored study schedules.
    *   **Mind Maps:** Generates Mermaid.js diagrams from complex study materials.
    *   **Mock Interview Simulator:** Voice-to-text Japanese IT interview practice with AI recruiter feedback.
*   👥 **Real-Time Collaboration (Study Room):**
    *   WebRTC Peer-to-Peer Video/Audio calls.
    *   Screen sharing capabilities.
    *   Collaborative Whiteboard (`tldraw`) synchronized across multiple clients.
    *   Shared Pomodoro timer for group focus sessions.
*   📊 **Productivity Tools:**
    *   Kanban Board for task management.
    *   Focus Mode (Pomodoro Timer) with progress tracking.
    *   Rich-text Note-taking and interactive Calendars.
*   🔐 **Authentication & Database:**
    *   Powered by Supabase (PostgreSQL, Row Level Security).

## 🛠️ Technology Stack

**Frontend:**
*   **React 18** (Vite)
*   **TypeScript** (Strict mode)
*   **Tailwind CSS** (Styling & Responsive Design)
*   **Framer Motion** (Animations)
*   **React Router v6** (Routing)
*   **Zustand / Context API** (State Management)

**Backend / Services:**
*   **Supabase** (PostgreSQL Database, Auth, Realtime Channels)
*   **Google Gemini 2.0 API** (Core AI generation)
*   **DeepSeek API** (Advanced reasoning & Mock Interviews)

**Advanced Libraries:**
*   `tldraw` (Infinite canvas whiteboard)
*   `dnd-kit` (Accessible drag & drop functionality)
*   `react-big-calendar` (Event scheduling)

## ⚙️ Architecture & Optimization
*   **PWA Ready:** Implemented Service Workers and manifest for offline capabilities and mobile installation.
*   **Token Optimization:** Intelligent `localStorage` caching mechanism for AI responses to dramatically reduce API costs and latency.
*   **Lazy Loading:** Heavy components like the `tldraw` 4MB bundle are dynamically loaded using `React.lazy` to keep the initial bundle size minimal and optimize LCP (Largest Contentful Paint).
*   **WebRTC Signaling:** Custom signaling server logic built on top of Supabase Realtime Channels for low-latency peer discovery.

## 🚀 Getting Started

### Prerequisites
*   Node.js (v18+)
*   Supabase Account
*   Gemini API Key / DeepSeek API Key

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/Farhodoff/study_planner.git
    cd study_planner
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Set up environment variables:
    Create a `.env` file in the root directory and add the following:
    ```env
    VITE_SUPABASE_URL=your_supabase_url
    VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
    VITE_DEEPSEEK_API_KEY=your_deepseek_api_key
    ```

4.  Run the development server:
    ```bash
    npm run dev
    ```

## 👨‍💻 Author

**Farhod** 
- [GitHub](https://github.com/Farhodoff)

---
*Built with passion and a focus on educational technology.*
