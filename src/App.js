import { Routes, Route } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import CountryList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import Countries from "./countries.json"


function App() {
  return (
    
    <div className="App">
      <Navbar></Navbar>
      <div className="grid">
        <CountryList></CountryList>
        <Routes>
        {Countries.map(country=>
        {
        return(
          <Route key={country.alpha3Code} path={`/${country.alpha3Code.toLowerCase()}`} 
          element={<CountryDetails country={country}/>}/>
        )
        }
        )}
          
      </Routes>
    </div>
    </div>
   
  );
}

export default App;
