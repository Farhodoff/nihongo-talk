import { Component, ReactNode, ErrorInfo } from 'react';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import { Button } from './ui/Button';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

// Redacts sensitive keys, tokens, and authorization credentials from technical strings
export function sanitizeErrorMessage(msg: string): string {
    if (!msg) return "Noma'lum xatolik";
    return msg
        .replace(/(AIzaSy[A-Za-z0-9_-]{10,})/g, 'AIzaSy[REDACTED]')
        .replace(/(sk-[A-Za-z0-9_-]{10,})/g, 'sk-[REDACTED]')
        .replace(/(Bearer\s+[A-Za-z0-9._-]+)/gi, 'Bearer [REDACTED]')
        .replace(/(apikey=[A-Za-z0-9._-]+)/gi, 'apikey=[REDACTED]');
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        const safeMessage = sanitizeErrorMessage(error?.message || '');
        console.error('[ErrorBoundary Safe Log]:', safeMessage, errorInfo?.componentStack?.slice(0, 300));
    }

    handleReset = () => {
        this.setState({ hasError: false, error: null });
        window.location.reload();
    };

    handleGoHome = () => {
        this.setState({ hasError: false, error: null });
        window.location.href = '/';
    };

    render() {
        if (this.state.hasError) {
            const displayError = sanitizeErrorMessage(this.state.error?.message || '');
            return (
                <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
                    <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center">
                        <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                            <AlertTriangle className="w-8 h-8 text-red-600 dark:text-red-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                            Xatolik yuz berdi
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-6">
                            Nimadir noto'g'ri ketdi. Iltimos, sahifani yangilang yoki bosh sahifaga qayting.
                        </p>
                        {displayError && (
                            <details className="mb-6 text-left">
                                <summary className="cursor-pointer text-sm text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
                                    Texnik ma'lumot
                                </summary>
                                <pre className="mt-2 p-3 bg-gray-100 dark:bg-gray-900 rounded text-xs overflow-auto font-mono text-gray-700 dark:text-gray-300">
                                    {displayError}
                                </pre>
                            </details>
                        )}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button onClick={this.handleReset} className="w-full flex items-center justify-center gap-2">
                                <RefreshCw className="w-4 h-4" /> Sahifani yangilash
                            </Button>
                            <Button variant="secondary" onClick={this.handleGoHome} className="w-full flex items-center justify-center gap-2">
                                <Home className="w-4 h-4" /> Bosh sahifa
                            </Button>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
