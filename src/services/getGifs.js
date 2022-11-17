
export default function GetGifs({keyword}){
    const apiKey = `ihZMV7ZLkJ4t66LUimA7rWlGBDclzjhF`;
    const gifsLimit = 15;
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${gifsLimit}&offset=0&rating=g&lang=es`;

    return (
        fetch(apiURL)
        .then(res => res.json())
        .then(response => {
            const {data = []} = response
            if (Array.isArray(data)){
                const gifs = data.map( image => {
                    const {images, title, id} = image;
                    const {url} = images.fixed_width_downsampled;
                    return {title, id, url};
                } );
                return gifs;
            }
        })
        
    );
}