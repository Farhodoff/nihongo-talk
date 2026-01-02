/// <reference types="vite/client" />
import { GoogleGenerativeAI } from "@google/generative-ai";

const getGenAI = (userKey?: string) => {
    if (!userKey) {
        throw new Error("AI Kaliti yo'q. Iltimos, Sozlamalar bo'limida Google API kalitingizni kiriting.");
    }
    return new GoogleGenerativeAI(userKey);
};

export const generateFlashcardsWithAI = async (
    topic: string,
    count: number = 5,
    userKey?: string
): Promise<{ front: string; back: string }[]> => {
    try {
        const genAI = getGenAI(userKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const prompt = `
      Task: Create ${count} high-quality flashcards for study purposes.
      Source Material or Topic: "${topic}"

      Instructions:
      1. If the source is a topic, generate key concepts.
      2. If the source is text/notes, extract key facts.
      3. "Front" should be a clear question or term.
      4. "Back" should be a concise answer or definition.
      
      Output Format:
      Return ONLY a valid JSON array of objects. No markdown formatting.
      [{"front": "Question?", "back": "Answer"}]
    `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Clean markdown code blocks if present
        const cleanedText = text.replace(/```json/g, "").replace(/```/g, "").trim();

        const json = JSON.parse(cleanedText);

        if (!Array.isArray(json)) {
            throw new Error("Invalid response format from AI");
        }

        // Validate structure
        return json.slice(0, count).filter((item: any) => item.front && item.back).map((item: any) => ({
            front: String(item.front),
            back: String(item.back)
        }));

    } catch (error) {
        console.error("AI Generation Error:", error);
        throw new Error("Failed to generate flashcards. Please try again.");
    }
};

export const generateStudyPlanWithAI = async (
    topic: string,
    daysUntilExam: number,
    hoursPerDay: number,
    userKey?: string
): Promise<{ title: string; dayOffset: number; duration: number; description?: string }[]> => {
    try {
        const genAI = getGenAI(userKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const prompt = `
            Create a detailed, day-by-day study plan for "${topic}".
            Duration: ${daysUntilExam} days.
            Intensity: ${hoursPerDay} hours/day.
            
            GOAL: Break down the subject into a logical curriculum (Beginner -> Intermediate -> Advanced).
            
            STRUCTURE:
            - Group by WEEKS (e.g., Week 1: Basics, Week 2: Logic, etc.).
            - for EACH DAY (1 to ${daysUntilExam}, excluding rest days if appropriate), provide a specific task.
            
            OUTPUT:
            Return ONLY a valid JSON array of objects.
            Format: 
            [
              { 
                "title": "Specific Topic for the Day", 
                "dayOffset": 0, // 0 = Today, 1 = Tomorrow, etc.
                "duration": 60, // minutes
                "description": "Brief instruction (e.g. 'Read Ch 1 and do Ex 5')" 
              }
            ]
            
            CRITICAL REQUIREMENTS:
            - "dayOffset" must range from 0 to ${daysUntilExam - 1}.
            - Allow for 1 "Rest Day" per week (e.g., every 7th day title="Rest & Review").
            - Content must be progressive.
            
            Example:
            [{"title": "Intro to Variables", "dayOffset": 0, "duration": 120, "description": "Watch video on types and create 3 vars."},
             {"title": "Loops & Logic", "dayOffset": 1, "duration": 120, "description": "Practice IF/ELSE and FOR loops."}]
        `;

        const result = await model.generateContent(prompt);
        const text = (await result.response).text();
        const cleanedText = text.replace(/```json/g, "").replace(/```/g, "").trim();
        const json = JSON.parse(cleanedText);

        if (!Array.isArray(json)) throw new Error("Invalid format");

        return json.map((item: any) => ({
            title: String(item.title),
            dayOffset: Number(item.dayOffset),
            duration: Number(item.duration),
            description: item.description // Pass description through
        }));
    } catch (e) {
        console.error(e);
        throw new Error("Failed to generate plan");
    }
};

export const generateResourcesWithAI = async (
    topic: string,
    userKey?: string
): Promise<{ title: string; type: 'video' | 'website' }[]> => {
    try {
        const genAI = getGenAI(userKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
        const prompt = `
            Recommend 6 highly rated, professional learning resources for "${topic}".
            
            STRICT REQUIREMENTS:
            - Target Audience: University Students or Serious Learners.
            - NO general terms like "Tutorial" or "Guide". Give SPECIFIC Channel Names or Platform Names.
            - NO childish or repetitive content.
            
            1. 3 Best YouTube Search Terms (Mix of English and Uzbek):
               - English: Famous channels (e.g., CrashCourse, FreeCodeCamp, etc.)
               - Uzbek: Professional local educators (e.g., "Khan Academy O'zbek", university lessons).
            2. 3 Best Dedicated Websites/Docs:
               - Official Documentation, Coursera, EdX, Khan Academy, GeeksForGeeks, etc.
            
            Return ONLY a valid JSON array of objects.
            Format: { "title": "Resource Name", "type": "video" | "website" }
            
            Example: 
            [
                {"title": "Traversy Media ${topic}", "type": "video"},
                {"title": "Khan Academy O'zbek ${topic}", "type": "video"},
                {"title": "Official ${topic} Documentation", "type": "website"},
                {"title": "W3Schools ${topic} Tutorial", "type": "website"}
            ]
        `;
        const result = await model.generateContent(prompt);
        const text = (await result.response).text();
        const cleanedText = text.replace(/```json/g, "").replace(/```/g, "").trim();
        const json = JSON.parse(cleanedText);

        if (!Array.isArray(json)) throw new Error("Invalid Format");
        return json;
    } catch (e) {
        // Fallback
        return [
            { title: "Video Tutorials", type: "video" },
            { title: "Official Documentation", type: "website" },
            { title: "Beginner Guide", type: "website" }
        ];
    }
};

// New Smart Resource System
export interface SmartResource {
    title: string;
    type: 'video' | 'article' | 'book' | 'course';
    description: string;
    link?: string; // Optional, usually a search term or direct link
}

export const recommendResourcesWithAI = async (
    topic: string,
    userKey?: string
): Promise<SmartResource[]> => {
    try {
        const genAI = getGenAI(userKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const prompt = `
            Act as an expert academic advisor. Find 8 high-quality, preferably FREE learning resources for the topic: "${topic}".
            
            CRITICAL INSTRUCTION: You MUST return exactly 8 items. Do not skip any category.
            
            REQUIRED COMPOSITION:
            1.  **2 VIDEOS** (YouTube channels/videos). Mix of English & Uzbek.
            2.  **2 ARTICLES/WEBSITES** (Docs/Blogs).
            3.  **2 BOOKS** (MANDATORY). If no specific book exists, recommend a general textbook for the field.
            4.  **2 COURSES** (MANDATORY). If no specific course exists, recommend a related playlist or Coursera/EdX course.

            LANGUAGE:
            - Prioritize UZBEK resources where possible (minimum 3-4 items).
            - Use ENGLISH for the rest (Global standard).

            Return ONLY a valid JSON array of objects:
            [
              {
                "title": "Resource Title",
                "type": "video" | "article" | "book" | "course",
                "description": "Short description in Uzbek (mention 'Bepul' if free).",
                "link": "Search query or URL"
              }
            ]
        `;

        const result = await model.generateContent(prompt);
        const text = (await result.response).text();
        const cleanedText = text.replace(/```json/g, "").replace(/```/g, "").trim();
        const json = JSON.parse(cleanedText);

        if (!Array.isArray(json)) throw new Error("Invalid Format");

        // Optimize links for search if they aren't URLs
        return json.map((item: any) => ({
            ...item,
            link: item.link.startsWith('http') ? item.link :
                item.type === 'video' ? `https://www.youtube.com/results?search_query=${encodeURIComponent(item.link)}` :
                    `https://www.google.com/search?q=${encodeURIComponent(item.link)}`
        }));
    } catch (e) {
        console.error("Smart Resource Error:", e);
        return [
            { title: "Official Documentation", type: "article", description: "Rasmiy qo'llanma (Docs)", link: `https://www.google.com/search?q=${encodeURIComponent(topic + ' documentation')}` },
            { title: "YouTube Tutorials", type: "video", description: "Video darsliklar toplami", link: `https://www.youtube.com/results?search_query=${encodeURIComponent(topic + ' tutorial')}` }
        ];
    }
};

export const generateStudyInsight = async (
    stats: { subject: string; hours: number; mood: number; pendingTasks: number; masteryScore: number }[],
    userKey?: string
): Promise<{ subject: string; advice: string }[]> => {
    try {
        const genAI = getGenAI(userKey);
        const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

        const prompt = `
            Analyze these study stats and identify 1-2 weakest subjects.
            Prioritize subjects with LOW MASTERY SCORE (< 50%) or LOW MOOD.
            Stats: ${JSON.stringify(stats)}
            
            Return a JSON array with "subject" and "advice" (in Uzbek language).
            Give specific, encouraging advice to improve mastery and performance.
            Example: [{"subject": "Math", "advice": "Matematikadan o'zlashtirish darajangiz past (30%)..."}]
            Limit to top 2 suggestions.
        `;

        const result = await model.generateContent(prompt);
        const text = (await result.response).text();
        const cleanedText = text.replace(/```json/g, "").replace(/```/g, "").trim();
        const json = JSON.parse(cleanedText);

        if (!Array.isArray(json)) throw new Error("Invalid format");
        return json;
    } catch (e) {
        console.error("AI Insight Error", e);
        return [];
    }
};
