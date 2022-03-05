import { Component } from "react";
import Caraosel from "./Carousel";
import ErrorBounday from "./Errorboundary";

class Details extends Component {
    state = { loading: true };
    async componentDidMount(){
        var id = await (window.location.href).split('/');
        id = await id[id.length -1];
        const res = await fetch(`https://corsapproval.herokuapp.com/http://pets-v2.dev-apis.com/pets?id=${id}`);
        const json = await res.json();
        this.setState(Object.assign({ loading: false }, json.pets[0]));    
    }
    render(){
        if (this.state.loading) {
            return <h2>loading … </h2>;
        }

        const { animal, breed, city, state, description, name , images} = this.state;
       
        return(
            <div className="details ">
              <h1>{name}</h1>
              <Caraosel images={images} />
              <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
              <button>Adopt {name}</button>
              <p>{description}</p>
          </div>
        )
    }
}



export default function DetailsWithoutError() {
  return (
    <ErrorBounday>
        <Details />
    </ErrorBounday>
  )
}

