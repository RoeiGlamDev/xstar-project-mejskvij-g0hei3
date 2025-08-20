import React from 'react';

// Function to format currency
export const formatCurrency = (amount: number): string => {
    return `$${amount.toFixed(2)}`; // Formats number to currency
};

// Function to capitalize the first letter of a string
export const capitalizeFirstLetter = (string: string): string => {
    return string.charAt(0).toUpperCase() + string.slice(1); // Capitalizes first letter
};

// Function to generate a unique ID
export const generateUniqueId = (): string => {
    return 'id-' + Math.random().toString(36).substr(2, 9); // Generates a unique ID
};

// Function to check if a string is empty
export const isEmpty = (value: string): boolean => {
    return !value || value.trim().length === 0; // Checks if string is empty
};

// Function to debounce a function call
export const debounce = (func: Function, delay: number) => {
    let timeoutId: NodeJS.Timeout;
    return (...args: any[]) => {
        if (timeoutId) clearTimeout(timeoutId); // Clears previous timeout
        timeoutId = setTimeout(() => {
            func(...args); // Calls the function after delay
        }, delay);
    };
};

export default {
    formatCurrency,
    capitalizeFirstLetter,
    generateUniqueId,
    isEmpty,
    debounce,
};