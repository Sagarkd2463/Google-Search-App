import Link from 'next/link';
import React from 'react';
import PaginationButtons from './PaginationButtons';

export default function NewsSearchResults({ results, searchTerm, page }) {
    if (!results || !results.articles) {
        return <p className="ml-3 mt-2 md:ml-5 lg:ml-8">No results found.</p>;
    }

    // Filter articles to ensure only valid ones are shown and exclude specific cases
    const validArticles = results.articles.filter(
        (article) =>
            article.url &&
            article.title &&
            article.source?.name &&
            article.title !== '[Removed]' &&
            article.source.name !== '[Removed]'
    );

    if (validArticles.length === 0) {
        return <p className="ml-3 mt-2 md:ml-5 lg:ml-8">No valid news articles found.</p>;
    }

    return (
        <div className="w-full mx-auto px-3 sm:pb-24 pb-40 sm:pl-[5%] md:pl-[14%] lg:pl-52">
            <p className="text-gray-600 text-sm mb-5 mt-3">
                About {new Intl.NumberFormat().format(results.totalResults)} results
            </p>


            {validArticles.map((article, index) => (
                <div className="mb-8 max-w-xl" key={index}>
                    <div className="group flex flex-col">
                        <Link
                            href={article.url}
                            className="text-gray-600 truncate">
                            {article.source.name}
                        </Link>

                        <Link
                            href={article.url}
                            className="group-hover:underline decoration-blue-800 text-xl
                            truncate font-medium text-blue-800">
                            {article.title}
                        </Link>

                        <p className="text-gray-600">{`Author - ${article.author}` || 'No author available.'}</p>
                    </div>
                    <p className="text-gray-600 truncate">{article.description || 'No description available.'}</p>
                </div>
            ))}

            <PaginationButtons searchTerm={searchTerm} page={page} />
        </div>
    );
};