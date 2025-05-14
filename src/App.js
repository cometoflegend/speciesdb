import './App.css';
import EspeciesList from './comp/EspeciesList';
import { EspeciesProvider } from './comp/EspeciesProvider';
import AddEspecie from './comp/FormEspecies';

function App() {
  return (
    <div className="App">
      <EspeciesProvider>
        <EspeciesList />
        <AddEspecie/>
      </EspeciesProvider>
    </div>
  );
}

export default App;
