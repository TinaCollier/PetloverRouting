import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/pet-details-not-found">
          <PetDetailsNotFound />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/:type/:id">
          <PetDetailsPage />
        </Route>
        <Route path='/homepage/:type?'>
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
