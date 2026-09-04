import { useEffect } from 'react';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  locale?: string;
  schema?: Record<string, any>;
  noIndex?: boolean;
}

const DEFAULT_TITLE = 'Nihongo Talk';
const DEFAULT_DESC =
  'JLPT N5-N1 darajalariga tizimli tayyorlaning. AI Speaking Coach, Writing Evaluator, SM-2 Fleshkartalar va shaxsiy kunlik reja.';
const DEFAULT_KEYWORDS =
  "Nihongo Talk, yapon tili, JLPT tayyorgarlik, Anki SM-2, fleshkartalar, AI Speaking Coach, JLPT Mock Exam, Pomodoro timer, o'quv rejalashtiruvchi";
const BASE_URL = 'https://nihon-talk.vercel.app';
const DEFAULT_OG_IMAGE = `${BASE_URL}/og-image.jpg`;

export const useSEO = ({
  title,
  description,
  keywords,
  canonical,
  ogImage,
  ogType = 'website',
  locale,
  schema,
  noIndex = false,
}: SEOProps = {}) => {
  useEffect(() => {
    // 1. Update Title - avoid redundant duplication of brand name
    let finalTitle = DEFAULT_TITLE;
    if (title && title.trim() !== DEFAULT_TITLE) {
      finalTitle = title.includes('Nihongo Talk') ? title : `${title} — Nihongo Talk`;
    }
    document.title = finalTitle;

    // Helper to update or create meta tag
    const setMetaTag = (
      selector: string,
      attribute: string,
      value: string,
      createTag: string = 'meta',
    ) => {
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
    const path = canonical || (typeof window !== 'undefined' ? window.location.pathname : '/');
    const finalCanonical = `${BASE_URL}${path.startsWith('/') ? path : `/${path}`}`;

    // 2. Standard Meta
    setMetaTag('meta[name="description"]', 'content', finalDesc);
    setMetaTag('meta[name="keywords"]', 'content', finalKeywords);
    setMetaTag(
      'meta[name="robots"]',
      'content',
      noIndex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large',
    );

    // 3. Canonical URL
    setMetaTag('link[rel="canonical"]', 'href', finalCanonical, 'link');

    // 4. Multilingual Hreflang Tags (SEO for Uzbek and Japanese)
    const setHreflang = (lang: string, href: string) => {
      let link = document.querySelector(
        `link[rel="alternate"][hreflang="${lang}"]`,
      ) as HTMLLinkElement | null;
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'alternate');
        link.setAttribute('hreflang', lang);
        document.head.appendChild(link);
      }
      link.setAttribute('href', href);
    };

    setHreflang('uz', `${finalCanonical}?lang=uz`);
    setHreflang('ja', `${finalCanonical}?lang=ja`);
    setHreflang('x-default', finalCanonical);

    // 5. Open Graph / Facebook / Telegram
    const activeLocale = locale || (document.documentElement.lang === 'ja' ? 'ja_JP' : 'uz_UZ');
    setMetaTag('meta[property="og:site_name"]', 'content', 'Nihongo Talk');
    setMetaTag('meta[property="og:title"]', 'content', finalTitle);
    setMetaTag('meta[property="og:description"]', 'content', finalDesc);
    setMetaTag('meta[property="og:image"]', 'content', finalImage);
    setMetaTag('meta[property="og:url"]', 'content', finalCanonical);
    setMetaTag('meta[property="og:type"]', 'content', ogType);
    setMetaTag('meta[property="og:locale"]', 'content', activeLocale);

    // 6. Twitter Card Tags
    setMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'content', finalTitle);
    setMetaTag('meta[name="twitter:description"]', 'content', finalDesc);
    setMetaTag('meta[name="twitter:image"]', 'content', finalImage);

    // 7. Dynamic JSON-LD Structured Data Injection
    let scriptTag: HTMLScriptElement | null = null;
    if (schema) {
      const scriptId = 'dynamic-page-schema';
      scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;
      if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = scriptId;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = JSON.stringify(schema);
    }

    return () => {
      if (scriptTag && scriptTag.parentNode) {
        scriptTag.parentNode.removeChild(scriptTag);
      }
    };
  }, [title, description, keywords, canonical, ogImage, ogType, locale, schema, noIndex]);
};
