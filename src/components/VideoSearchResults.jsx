import React from 'react';
import Link from 'next/link';
import PaginationButtons from './PaginationButtons';

export default function VideoSearchResults({ results }) {
    if (!results || !results.items?.length) {
        return (
            <div className="ml-3 mt-2 md:ml-5 lg:ml-8">
                <p className="text-gray-600 text-lg">
                    No video results found. Try searching for something else.
                </p>
            </div>
        );
    }

    return (
        <div className="sm:pb-24 pb-40 mt-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-3 space-x-4">
                {results.items.map((result) => (
                    <div className="mb-8" key={result.id.videoId}>
                        <div className="group">
                            <Link href={`https://www.youtube.com/watch?v=${result.id.videoId}`}>
                                <img
                                    src={result.snippet.thumbnails.medium.url}
                                    alt={result.snippet.title}
                                    className="h-60 group-hover:shadow-xl w-full object-cover transition-shadow duration-300"
                                />
                            </Link>

                            <Link href={`https://www.youtube.com/watch?v=${result.id.videoId}`}>
                                <h2 className="group-hover:underline truncate text-normal mt-2">
                                    {result.snippet.title}
                                </h2>
                            </Link>

                            <p className="truncate text-gray-600 text-sm mt-1">
                                {result.snippet.channelTitle}
                            </p>
                            <p className="text-gray-500 text-xs">
                                Published on: {new Date(result.snippet.publishedAt).toLocaleDateString()}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <PaginationButtons />
        </div>
    );
};