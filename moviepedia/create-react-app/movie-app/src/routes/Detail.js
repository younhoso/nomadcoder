import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'

function Detail() {
	const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
	const {id} = useParams();
	const getMovie = async () => {
		const data = await(await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
		setMovies(data['data']['movie'])
		setLoading(false);
	};
	useEffect(() => {
		getMovie()
	},[])
	const {title, rating, medium_cover_image, description_intro} = movies;
	return(
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					 <h1>{title} {rating}</h1>
					 <img src={medium_cover_image}></img>
					 <p>{description_intro}</p>
				</div>
			)}
		</div>
	);
}
export default Detail;