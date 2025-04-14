// base URL for MangaDex API
const MANGADEX_API_BASE = 'https://api.mangadex.org'

async function searchManga(title) {
    try {
        const searchUrl = new URL('/manga', MANGADEX_API_BASE);
        searchUrl.searchParams.append('title', title);
        searchUrl.searchParams.append('limit', 5);
        searchUrl.searchParams.append('order[relevance]', 'desc');

        console.log('Attempting to fetch:', searchUrl.toString()); // Debug Log

        // Make API call
        const response = await fetch(searchUrl.toString());
        if(!response.ok){
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        return data.data;
    } catch (error) {
        console.error('Error searching manga:', error);
        return []
    }
}

console.log("Testing");
document.addEventListener('DOMContentLoaded', () => {
    // Test the search function
    searchManga("Naruto").then(results => {
        console.log(results);
    });
});
