import { Component } from "react";
import { Link, Navigate } from "react-router-dom";

class ErrorBounday extends Component {
    state = {hasError : false, redirect : false};
    static getDerivedStateFromError() {
        return { hasError: true };
    }
    componentDidCatch(error, info) {
        console.error("ErrorBoundary caught an error", error, info);
        if (this.state.hasError) {
            setTimeout(() => this.setState({ redirect: true }), 3000);
        }
    }
    render() {
        if(this.state.redirect){
            // console.clear()
           return <Navigate to={'/'} />
        }
        else if (this.state.hasError) {
          return (
            <h2>
              There was an error with this listing. <Link to="/">Click here</Link>{" "}
              to back to the home page or wait Three seconds.
            </h2>
          );
        }
    
        return this.props.children;
      }
};
export default ErrorBounday;