import NewsSearchResults from '@/components/NewsSearchResults';
import config from '@/config/config';
import Link from 'next/link';

export default async function NewsSearchPage({ searchParams }) {
    const page = Math.max(1, parseInt(searchParams.page, 10) || 1);
    const searchTerm = searchParams.searchTerm || '';

    if (!searchTerm) {
        return (
            <div className="flex flex-col justify-center items-center pt-10">
                <h1 className="text-3xl mb-4">Please enter a keyword to search</h1>
                <Link href="/" className="text-blue-500">
                    Go Home
                </Link>
            </div>
        );
    }

    const url = `https://newsapi.org/v2/everything?q=${encodeURIComponent(searchTerm)}&apiKey=${config.news.API_KEY}&page=${page}
    &sortBy=publishedAt&language=en`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }

        const data = await response.json();
        const articles = data.articles || [];

        if (articles.length === 0) {
            return (
                <div className="flex flex-col justify-center items-center pt-10">
                    <h1 className="text-3xl mb-4">
                        No results found for "{searchTerm}"
                    </h1>
                    <p className="text-lg">
                        Try searching for something else{' '}
                        <Link href="/" className="text-blue-500">
                            Go Home
                        </Link>
                    </p>
                </div>
            );
        }

        return (
            <div>
                <NewsSearchResults results={data} searchTerm={searchTerm} page={page} />
            </div>
        );
    } catch (error) {
        console.error('Error fetching search results:', error);
        return (
            <div className="flex flex-col justify-center items-center pt-10">
                <h1 className="text-3xl mb-4">Something went wrong</h1>
                <p className="text-lg">
                    Please try again later{' '}
                    <Link href="/" className="text-blue-500">
                        Go Home
                    </Link>
                </p>
            </div>
        );
    }
};