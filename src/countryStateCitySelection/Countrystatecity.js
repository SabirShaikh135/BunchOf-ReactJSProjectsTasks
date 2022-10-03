import React,{useState} from 'react'
import dataCSC from './dataCSC';

function Countrystatecity() {
    const [selectedCountry,setSelectedCountry]=useState();
    const [selectedState,setSelectedState]=useState();
    const [selectedCity,setSelectedCity]=useState();

    const availableState= dataCSC.countries.find(country=>country.name===selectedCountry);
    const availableCity= availableState?.states?.find(state=>state.name===selectedState);
    console.log("availableState",availableState);
    console.log("availableCity",availableCity);

  return (
    <div className="container">
        <h1>Select Country State and City</h1>
        <div className="country">
            <label htmlFor="">Country</label>
            <select class="form-select"
                value={selectedCountry}
                onChange={(e)=>setSelectedCountry(e.target.value)}
            >
                <option selected>Choose Country</option>
                {dataCSC.countries.map((country,key)=>{
                   
                    return(
                     <option value={country.name} key={key}>{country.name}</option>
                    )
                })}
            </select>
        </div>

        <div className="country">
            <label htmlFor="">State</label>
            <select class="form-select"
                    value={selectedState}
                    onChange={(e)=>setSelectedState(e.target.value)}
            >
                <option selected>Choose State</option>
                {
                    availableState?.states.map((state,key)=>{
                        
                        return(
                         <option value={state.name} key={key}>{state.name}</option>
                        )
                    })
                }
            </select>
        </div>

        <div className="country">
            <label htmlFor="">Country</label>
            <select class="form-select"
                value={selectedCity}
                onChange={(e)=>setSelectedCity(e.target.value)}
            >
                <option selected>Choose City</option>
                {
                    availableCity?.cities.map((city,key)=>{
                        return(
                            <option value={city} key={key}>{city}</option>
                        )
                    })
                }
            </select>
        </div>

    </div>
  )
}

export default Countrystatecity


// Andheri-Ghatkopar Link Road,Asalpha sakinaka,Mumbai, Maharashtra 400072



















