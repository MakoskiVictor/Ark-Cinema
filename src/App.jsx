import './App.css'
import { Discover } from '@/components/Discover.jsx'

function App () {
  return (
    <div className='.page'>
      <header>
        <h1>Ark Cinema</h1>
        <form action='SearchMovie'><input type='text' /><button>Search</button></form>
      </header>
      <main>
        <Discover />
      </main>
    </div>
  )
}

export default App
