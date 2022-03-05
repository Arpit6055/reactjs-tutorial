import { useState , useContext} from "react";
import useBreedList from '../Others/useBreedList.js'
import Petresults from '../Others/Petresults.js'
import ThemeContext from "../Others/Themecontext.js";

const ANIMAL = ["bird", "cat", "dog", "rabbit", "reptile"];

const Search = ()=>{
    const [location, setLocation] = useState("");
    const [animal, setAnimal] = useState("");
    const [breed, setBreed] = useState(' ');
    const [pets, setPet] = useState([]);
    const [breeds] = useBreedList(animal);
    const [theme] = useContext(ThemeContext);
   
    const updateLocation = (e)=>{
        setLocation(e.target.value);
    }
    const selectAnimalhere = (e)=>{
        setAnimal(e.target.value);
    }
    const selectAnimalbreed = (e)=>{
        setBreed(e.target.value);
    }
    async function requestPet(){
        const res = await fetch(`https://cors-everywhere.herokuapp.com/http://pets-v2.dev-apis.com/pets?animal=${animal}&breed=${breed}`);
        const resJon = await res.json();
        setPet(resJon.pets);
    }
    return (
        <div className="search-params">
            <form onSubmit={e=>{ 
                e.preventDefault();
                requestPet();
            }}>
                <label htmlFor="loaction">
                    <input type="text" id="location" onChange={updateLocation} onBlur={updateLocation} value={location} placeholder="Your Location" required/>
                <label htmlFor="animal">
                   <select name="animal" id="animal" value={animal}  onChange={selectAnimalhere} >
                       <option />
                       {
                           ANIMAL.map(animal =>(
                               <option value={animal} key={animal}>{animal}</option>
                           ))
                       }
                   </select>
                </label>
                <label htmlFor="breed">
                   <select name="breed" id="breed" value={breed} onChange={selectAnimalbreed} >
                       <option />
                       {breeds.map((breed) => (
                        <option key={breed} value={breed}>{breed}</option>))
                        }
                   </select>
                </label>
                <button style={{ backgroundColor: theme }}>Submit</button>
        
                </label>
            </form> 
                <Petresults  pets={pets}/>
            
        </div>
    )
}
export default Search;