const getGifs = async (category) => {
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=DRvavsDEyd1d0RPt3RznvZr7hDmAMU3r&q=${ encodeURIComponent(category) }&limit=5`;

  const res = await fetch(URL);
  const { data } = await res.json();

  const gifs = data.map(({ id, images, title }) => ({
    key: id,
    url: images.downsized_medium.url,
    title,
  }));

  return gifs;
};

export default getGifs;
