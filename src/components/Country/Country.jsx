import React from 'react';

const Country = (props) => {
    // eslint-disable-next-line react/prop-types
    const {region,population,area,name} = props.country;
    return (
        <div style={{background:"yellow" ,border:"10px solid blue", margin:"20px",borderRadius:"30px"}}>
            
            <h1>Name : {name.common}</h1>
            <h2>Region : {region}</h2>
            <h3>Population : {population}</h3>
            <p>Area : {area}</p>
            
           
        </div>
    )
};

export default Country;