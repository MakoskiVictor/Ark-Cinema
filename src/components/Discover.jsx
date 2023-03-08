/* import withoutResults from '@/mocks/no-results.json' */
import withResults from '@/mocks/with-results.json'
import { IMAGE_FRONT_URL } from '@/constants.js'
import discoverStyles from '@/styles/Discover.module.css'
import { Card } from '@/components/Card.jsx'

export function Discover () {
  const movies = withResults.results
  const hasMovies = movies.length > 0
  return (
    <div className='App'>
      <ul className={discoverStyles.colums}>
        {hasMovies
          ? movies.map(movie => {
            return (
              <Card
                title={movie.title}
                id={movie.id}
                image={`${IMAGE_FRONT_URL}${movie.poster_path}`}
                date={movie.release_date}
                rating={movie.vote_average}
                key={movie.id}
              />
            )
          })
          : <p>WE CULDN'T FIND THAT MOVIE</p>}
      </ul>
    </div>
  )
}
