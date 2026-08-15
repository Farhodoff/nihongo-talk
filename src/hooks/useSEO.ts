import { useEffect } from 'react';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    canonical?: string;
    ogImage?: string;
    ogType?: string;
}

const DEFAULT_TITLE = "Kaizen AI — Aqlli O'quv Platformasi | IELTS & JLPT";
const DEFAULT_DESC = "IELTS Band 7+ va JLPT N3 ga 60 kunda tayyorlaning. AI Speaking Examiner, Writing Evaluator, SM-2 Fleshkartalar va shaxsiy kunlik reja.";
const DEFAULT_KEYWORDS = "Kaizen AI, IELTS O'zbekiston, JLPT tayyorgarlik, Anki SM-2, fleshkartalar, AI Speaking Coach, IELTS Mock Exam, Pomodoro timer, o'quv rejalashtiruvchi";
const BASE_URL = "https://kaizen-ai.vercel.app";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

export const useSEO = ({
    title,
    description,
    keywords,
    canonical,
    ogImage,
    ogType = 'website'
}: SEOProps = {}) => {
    useEffect(() => {
        // Update Title
        const finalTitle = title ? `${title} | Kaizen AI` : DEFAULT_TITLE;
        document.title = finalTitle;

        // Helper to update or create meta tag
        const setMetaTag = (selector: string, attribute: string, value: string, createTag: string = 'meta') => {
            let element = document.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
            if (!element) {
                element = document.createElement(createTag) as any;
                if (selector.startsWith('meta[name=')) {
                    const name = selector.match(/name="([^"]+)"/)?.[1];
                    if (name) element?.setAttribute('name', name);
                } else if (selector.startsWith('meta[property=')) {
                    const prop = selector.match(/property="([^"]+)"/)?.[1];
                    if (prop) element?.setAttribute('property', prop);
                } else if (selector.startsWith('link[rel=')) {
                    const rel = selector.match(/rel="([^"]+)"/)?.[1];
                    if (rel) element?.setAttribute('rel', rel);
                }
                if (element) document.head.appendChild(element);
            }
            if (element) {
                element.setAttribute(attribute, value);
            }
        };

        const finalDesc = description || DEFAULT_DESC;
        const finalKeywords = keywords || DEFAULT_KEYWORDS;
        const finalImage = ogImage || DEFAULT_OG_IMAGE;
        const finalCanonical = canonical ? `${BASE_URL}${canonical}` : window.location.href;

        // Standard Meta
        setMetaTag('meta[name="description"]', 'content', finalDesc);
        setMetaTag('meta[name="keywords"]', 'content', finalKeywords);

        // Canonical
        setMetaTag('link[rel="canonical"]', 'href', finalCanonical, 'link');

        // Open Graph
        setMetaTag('meta[property="og:title"]', 'content', finalTitle);
        setMetaTag('meta[property="og:description"]', 'content', finalDesc);
        setMetaTag('meta[property="og:image"]', 'content', finalImage);
        setMetaTag('meta[property="og:url"]', 'content', finalCanonical);
        setMetaTag('meta[property="og:type"]', 'content', ogType);

        // Twitter
        setMetaTag('meta[name="twitter:title"]', 'content', finalTitle);
        setMetaTag('meta[name="twitter:description"]', 'content', finalDesc);
        setMetaTag('meta[name="twitter:image"]', 'content', finalImage);

    }, [title, description, keywords, canonical, ogImage, ogType]);
};
