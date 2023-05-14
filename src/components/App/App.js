import {HashRouter as Router, Route, useParams} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';

function App() {

  function MovieIDPage() {
    // this will get the movieID param from the URL:
    let { movieID } = useParams();
  }

  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        
        {/* Details page */}
        {/* Need useParams to access ID in the route; researched per Instructions */}
        <Route path="/details/:movieID" element={<MovieIDPage />}>
          <MovieDetails />
        </Route>

        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;
