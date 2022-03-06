import { Component } from "react";
import Modal from "../Pages/Modal";
import Caraosel from "./Carousel";
import ErrorBounday from "./Errorboundary";


class Details extends Component {
    state = { loading: true, showModal:false };
    async componentDidMount(){
        var id = await (window.location.href).split('/');
        id = await id[id.length -1];
        const res = await fetch(`https://corsapproval.herokuapp.com/http://pets-v2.dev-apis.com/pets?id=${id}`);
        const json = await res.json();
        this.setState(Object.assign({ loading: false }, json.pets[0]));    
    }
    // above render
toggleModal = () => this.setState({ showModal: !this.state.showModal });
adopt = () => (window.location = "https://corsapproval.herokuapp.com/http://bit.ly/pet-adopt");
    render(){
        if (this.state.loading) {
            return <h2>loading … </h2>;
        }

        const { animal, breed, city, state, description, name , images, showModal} = this.state;
       
        return(
            <div className="details ">
              <h1>{name}</h1>
              <Caraosel images={images} />
              <h2>{`${animal} — ${breed} — ${city}, ${state}`}</h2>
              <button onClick={this.toggleModal} >Adopt {name}</button>
              <p>{description}</p>
              {
              showModal ? (
                <Modal>
                  <div>
                    <h1>Would you like to adopt {name}?</h1>
                    <div className="buttons">
                      <button onClick={this.adopt}>Yes</button>
                      <button onClick={this.toggleModal}>No</button>
                    </div>
                  </div>
                </Modal>
                ) : null
              }
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

