import Countries from "../countries.json"
import { NavLink } from "react-router-dom";

export default function CountryDetails (props){
    return(
        <nav className="CountryDetails">
        <img src={`https://flagpedia.net/data/flags/icon/72x54/${props.country.alpha2Code.toLowerCase()}.png`} alt={props.country.name.common}></img>
        <h2>{props.country.name.official}</h2>
        <p>Capital {props.country.capital[0]}</p>
        <p>Area {props.country.area}</p>
        <div><p>Borders</p>
        {props.country.borders.map(border=>
          {const country = Countries.find(country=>country.alpha3Code === border ) 
          return (
            <div key={country.alpha3Code}>
                <NavLink to={`/${country.alpha3Code.toLowerCase()}`} activeClassName="selected">{country.name.common}</NavLink><br></br>
           </div>
          )
          
          }
        )}
            
        
        </div>
      </nav>)
}