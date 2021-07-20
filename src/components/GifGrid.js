import useFetchGifs from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {

  const { data, loading } = useFetchGifs(category);


  return (
    <>
      <h3 className="category-title">{ category }</h3>
      { loading && <p>Loading...</p> }
      <div className="gif-grid">
        {
          data.map(props => <GifGridItem {...props} />)
        }
      </div>
    </>
  )
};

export default GifGrid;
