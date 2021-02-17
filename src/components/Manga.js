import { useParams } from 'react-router-dom';

const Manga = () => {
  const { id } = useParams();
  return (
    <h1>
      Manga
      {' '}
      {id}
    </h1>
  );
};

export default Manga;
