"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBox() {

    const [search, setSearch] = useState('');
    const router = useRouter();

    const onSubmitHandler = (e: any) => {
        e.preventDefault();
        if (!search) return;
        router.push(`/search?query=${search}`);
    }

    return (
        <form onSubmit={onSubmitHandler} className="flex max-w-6xl mx-auto justify-between items-center px-5">
            <input 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text" 
                placeholder="Search keywords..."
                className="w-full h-14 rounded-sm placeholder-gray-500 outline-none bg-transparent flex-1" 
            />
            <button disabled={!search} type="submit" className="text-amber-700 disabled:text-gray-400">
                Search
            </button>
        </form>
    )
}
