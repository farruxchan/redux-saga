export const getLatestNews = async (searchQuery) => {
    console.log(searchQuery)
    const request = await fetch(`https://hn.algolia.com/api/v1/search?query=${searchQuery}react&hitsPerPage=10&page=0`);
    return await request.json();
}