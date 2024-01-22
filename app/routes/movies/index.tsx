import { json } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import { MovieCard } from '#app/components/movie-card'

type TMDBMovie = {
	poster_path: string
	title: string
	id: string
	release_date: string
}

type TMDBResponse<T> = {
	page: number
	total_pages: number
	total_results: number
	results: T[]
}

export const loader = async () => {
	console.log('ici', process.env)
	const url = `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${process.env.TMDB_API_KEY}`

	const response = await fetch(url)
	const movies = (await response.json()) as TMDBResponse<TMDBMovie>

	return json(movies)
}

export default function Movies() {
	const movies = useLoaderData<typeof loader>()

	return (
		<div className="container mb-48 mt-24">
			<h1 className="mb-8 text-center text-h1">Movies</h1>
			<div className="flex flex-wrap justify-center gap-4">
				{movies.results.map(({ poster_path, title, id, release_date }) => (
					<MovieCard
						to={`/movies/${id}`}
						key={id}
						id={id}
						image={`https://image.tmdb.org/t/p/w1280/${poster_path}`}
						title={title}
						releaseDate={release_date}
						className="flex"
					/>
				))}
			</div>
		</div>
	)
}
