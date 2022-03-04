import { Link } from "react-router-dom";
const Pet = (props) => {
    const { name, animal, breed, images, location, id } = props;
  
    let hero = "https://corsapproval.herokuapp.com/http://pets-images.dev-apis.com/pets/none.jpg";
    var hero2 = ""
    if (images.length > 0) {
      hero = images[0];
      hero = 'https://corsapproval.herokuapp.com/'+hero;
    }
  
    return (
      <Link to={`/details/${id}`} className="pet">
        <div className="image-container">
          <img src={hero} />
        </div>
        <div className="info">
          <h1>{name}</h1>
          <h2>{`${animal} — ${breed} — ${location}`}</h2>
        </div>
      </Link>
    );
  };
  
  export default Pet;