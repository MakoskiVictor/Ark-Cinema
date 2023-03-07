import './App.css'
import withResults from '@/mocks/with-results.json'
import withoutResults from '@/mocks/no-results.json'

function App () {
  const movies = withResults.results
  const hasMovies = movies.length > 0
  return (
    <div className='App'>
      <h1>Ark Cinema</h1>
      <ul>
        {hasMovies
          ? movies.map(e => {
            return (
              <div key={e.id}>
                <p>Title: {e.original_title}</p>
              </div>
            )
          })
          : <p>WE CULDN'T FINE THAT MOVIE</p>}
      </ul>
    </div>
  )
}

export default App
