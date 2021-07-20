const GifGridItem = ({ title, url }) => {
  return (
    <div className="gif-card">
      <picture className="gif-img--container">
        <img src={ url } alt={ title } className="gif-img" />
      </picture>
      <p className="gif-description">{ title }</p>
    </div>
  )
};

export default GifGridItem;
