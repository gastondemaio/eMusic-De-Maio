import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/Items/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <>
      <NavBar/>
      
      <ItemDetailContainer/>
      </>
    </div>
  );
}

export default App;
