"use client";
import React from 'react';

const fetchData = async (url, data) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });
        return await response.json();
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
    }
};

export default fetchData;
