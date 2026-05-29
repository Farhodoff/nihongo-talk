/**
 * Ollama API Wrapper
 * Provides integration with local Ollama models
 */

interface OllamaRequest {
    model: string;
    prompt: string;
    stream: boolean;
}

interface OllamaResponse {
    model: string;
    created_at: string;
    response: string;
    done: boolean;
}

const OLLAMA_URL = import.meta.env.VITE_OLLAMA_URL || 'http://localhost:11434';
const OLLAMA_MODEL = import.meta.env.VITE_OLLAMA_MODEL || 'llama3.2';

/**
 * Call Ollama API with retry logic
 */
export const callOllama = async (
    prompt: string,
    model: string = OLLAMA_MODEL,
    retries: number = 3
): Promise<string> => {
    const url = `${OLLAMA_URL}/api/generate`;

    const requestBody: OllamaRequest = {
        model,
        prompt,
        stream: false
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        });

        if (!response.ok) {
            throw new Error(`Ollama API error: ${response.status} ${response.statusText}`);
        }

        const data: OllamaResponse = await response.json();
        return data.response;

    } catch (error: unknown) {
        const err = error as Error;
        if (retries > 0) {
            console.warn(`Ollama request failed, retrying... (${retries} attempts left)`);
            await new Promise(resolve => setTimeout(resolve, 2000));
            return callOllama(prompt, model, retries - 1);
        }

        console.error('Ollama API Error:', error);
        throw new Error(`Ollama bilan bog'lanib bo'lmadi: ${err.message}`);
    }
};

/**
 * Check if Ollama is available
 */
export const isOllamaAvailable = async (): Promise<boolean> => {
    try {
        const response = await fetch(`${OLLAMA_URL}/api/tags`, {
            method: 'GET',
        });
        return response.ok;
    } catch {
        return false;
    }
};

/**
 * Get available Ollama models
 */
export const getOllamaModels = async (): Promise<string[]> => {
    try {
        const response = await fetch(`${OLLAMA_URL}/api/tags`);
        if (!response.ok) return [];

        const data = await response.json();
        const models = data.models as { name: string }[] | undefined;
        return models?.map(m => m.name) || [];
    } catch {
        return [];
    }
};
