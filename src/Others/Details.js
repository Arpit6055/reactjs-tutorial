import { Component } from "react";


class Details extends Component {
    constructor(){
        super();
       this.state = {loading : true}
    }
    async componentDidMount(){
        var id =  (window.location.href).split('/')[4]
        console.log("id is", id);
        const res = await fetch(`https://corsapproval.herokuapp.com/http://pets-v2.dev-apis.com/pets?id=${id}`);
        const json = await res.json();
        this.setState(Object.assign({ loading: false }, json.pets[0]));    
    }
    render(){
        console.log(this.state);

        if (this.state.loading) {
            return <h2>loading … </h2>;
        }

        const { animal, breed, city, state, description, name } = this.state;
        const images = this.state['images'][0]
        return(
            <div className="details ">
              <h1>{name}</h1>
              <div className="carousel"><img  src={images} alt="img" srcset="" /></div>
              
              <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
              <button>Adopt {name}</button>
              <p>{description}</p>
          </div>
        )
    }
}


export default Details;