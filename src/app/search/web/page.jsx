import WebSearchResults from '@/components/WebSearchResults';
import Link from 'next/link';

export default async function WebSearchPage({ searchParams }) {
  const startIndex = searchParams.start || '1';
  const searchTerm = searchParams.searchTerm;

  if (!searchTerm) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">Please enter a search term</h1>
        <Link href="/" className="text-blue-500">
          Go Home
        </Link>
      </div>
    );
  }

  const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${encodeURIComponent(
    searchTerm)}&start=${parseInt(startIndex, 10)}`;

  console.log('Fetching URL:', url);

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    const data = await response.json();
    const results = data.items;

    if (!results || results.length === 0) {
      return (
        <div className="flex flex-col justify-center items-center pt-10">
          <h1 className="text-3xl mb-4">
            No results found for "{searchTerm}"
          </h1>
          <p className="text-lg">
            Try searching for something else{' '}
            <Link href="/" className="text-blue-500">
              Home
            </Link>
          </p>
        </div>
      );
    }

    return (
      <div>
        <WebSearchResults results={data} />
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
            Home
          </Link>
        </p>
      </div>
    );
  }
};