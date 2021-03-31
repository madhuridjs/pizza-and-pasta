import Search from './components/search';
import './App.css';
import Ingredients from './components/ingredients';
import Items from'./components/items';
import {BrowserRouter,Route,Switch} from 'react-router-dom';

function App() {
    return (
      <BrowserRouter>
      <section className= "container">
        <Search />
        <Switch>
          <Route path = "/items" exact component= {Items} />
          <Route path = "/items/:id" component={Ingredients} />
        </Switch>
      </section> 
      </BrowserRouter>
    );
  }
export default App;
