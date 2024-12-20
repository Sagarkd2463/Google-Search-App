import VideoSearchResults from '@/components/VideoSearchResults';
import config from '@/config/config';
import Link from 'next/link';

export default async function VideoSearchPage({ searchParams }) {
    const pageToken = searchParams.pageToken || '';
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

    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${encodeURIComponent(
        searchTerm)}&type=video&key=${config.youtube.API_KEY}&pageToken=${pageToken}`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`API Error: ${response.statusText}`);
        }

        const data = await response.json();

        if (data.error) {
            throw new Error(data.error.message || 'Unknown API error');
        }

        const results = data.items || [];

        if (results.length === 0) {
            return (
                <div className="flex flex-col justify-center items-center pt-10">
                    <h1 className="text-3xl mb-4">
                        No video results found for "{searchTerm}"
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
                <VideoSearchResults results={data} />
            </div>
        );
    } catch (error) {
        console.error('Error fetching video search results:', error);
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