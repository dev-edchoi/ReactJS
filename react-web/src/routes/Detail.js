import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovies] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(json);
    setLoading(false);
    console.log(json);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? null : (
        <div>
          <h1>
            {movie.data.movie.title_long} (평점 : {movie.data.movie.rating})
          </h1>
          <h5>{movie.data.movie.date_uploaded}</h5>
          <img
            src={movie.data.movie.large_cover_image}
            alt={movie.data.movie.id}
          />
          <ul>
            {movie.data.movie.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <h4>{movie.data.movie.description_full}</h4>
        </div>
      )}
    </div>
  );
}

export default Detail;
