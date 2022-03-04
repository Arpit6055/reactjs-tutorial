import { Component } from "react";

class Details extends Component {
    constructor(){
        super();
       this.state = {loading : true}
    }
    async componentDidMount(){
        const res = await fetch(`https://cors-everywhere.herokuapp.com/http://pets-v2.dev-apis.com/pets?id=${this.props.match.params.id}`)
    }
    render(){
        return <h3>Hello from details class</h3>
    }
}

export default Details;