import Pet from '../Pages/Pet'
import React from "react";
const Petresults = (props)=>{
    return (
        <div className='search'>
            {!(props.pets).length? <h2>No Pets Found</h2>:
            (props.pets).map((pet) => (
                <Pet animal={pet.animal} key={pet.id} name={pet.name} breed={pet.breed} images={pet.images} location={`${pet.city}, ${pet.state}`} id={pet.id} />
            ))
            }
        </div>
    )
}
export default Petresults