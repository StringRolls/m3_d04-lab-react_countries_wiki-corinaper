import Countries from "../countries.json"
import { NavLink } from "react-router-dom";


export default function CountryList (){
    return(
        <nav className="Country">
        <ul>
        {Countries.map((country)=>
        {return(
           <div key={country.alpha3Code}>
           <NavLink activeClassName="selected" to={`/${country.alpha3Code.toLowerCase()}`}>{country.name.common}</NavLink><br></br>
           </div>
        )})}
        </ul>
      </nav>)
}