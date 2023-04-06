export const getGifs = async (category: any) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=Njbdf54MIBaf5ofJFRRCPw08MOh6V4aR&q=${encodeURI(category)}&limit=10&offset=0&rating=g&lang=en`;

    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(({ id, title, images }: any) => {
        return { id, title, url: images?.downsized_medium?.url };
    });

    return gifs;
}