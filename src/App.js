import './App.css';
import NavBar from './components/navbar/NavBar';
import ItemListContainer from './components/Items/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <>
      <NavBar/>
      <ItemListContainer texto="Gaston"/>
      </>
    </div>
  );
}

export default App;
