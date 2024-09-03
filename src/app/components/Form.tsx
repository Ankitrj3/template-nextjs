'use client'

import React from "react";

type Props = {};

export default function Form({}: Props) {
    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (files && files.length > 0) {
            const file = files[0];
            const fileInfo = {
                name: file.name,
                type: file.type,
                size: file.size
            };
            console.log(JSON.stringify(fileInfo));
        }
    };

    return (
        <form className="max-w-sm">
            <label htmlFor="file-input" className="sr-only">
                Choose file
            </label>
            <input
                type="file"
                name="file-input"
                id="file-input"
                accept="image/*"
                className="block w-full border
            border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 
            focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none file:bg-gray-50 
            file:border-0 file:me-4 file:py-3 file:px-4"
                onChange={handleFileInputChange}
            />
        </form>
    );
}
