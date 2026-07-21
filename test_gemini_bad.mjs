import { GoogleGenerativeAI } from '@google/generative-ai';

async function testGeminiBadKey() {
    try {
        const ai = new GoogleGenerativeAI('AIzaSyDummyKey1234567890');
        const model = ai.getGenerativeModel({ model: 'gemini-1.5-flash' });
        const res = await model.generateContent('hello');
        console.log("Success:", res);
    } catch (e) {
        console.error("Gemini Error:", e.status, e.message);
    }
}

testGeminiBadKey();
