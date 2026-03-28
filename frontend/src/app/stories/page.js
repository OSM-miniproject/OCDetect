'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import "../globals.css";

const StoriesPage = () => {
    const [stories, setStories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const response = await fetch('https://osm-backend-deploy-1.onrender.com/api/stories');
                if (!response.ok) throw new Error('Failed to fetch stories');
                const data = await response.json();
                setStories(data);
            } catch (error) {
                console.error('Error fetching stories:', error);
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchStories();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="p-5">
            <h1 className="text-3xl font-bold">Stories</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5">
                {stories.map((story) => (
                    <div key={story._id} className="border p-4 rounded-lg shadow">
                        <img src={story.imageUrl} alt={story.title} className="w-full h-64 object-cover rounded-md" />
                        <h2 className="text-xl font-semibold mt-3">{story.title}</h2>
                        <Link href={`/stories/${story._id}`}>
                            <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded">
                                Read More
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default StoriesPage;
