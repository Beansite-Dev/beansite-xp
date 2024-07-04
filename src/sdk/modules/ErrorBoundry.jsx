import BSoD from "./BSoD";
import React from "react";
class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state={hasError:false,errorData:null};}
    static getDerivedStateFromError(error){
        return{hasError:true,errorData:error};}
    componentDidCatch(error,info) {
        console.error(`[SDK_ERR] ${error}\n${info.componentStack}`);
        this.setState({
            hasError:true,
            errorData:[error,info]});
    }
    render(){
        if(this.state.hasError){
          return <BSoD errorData={this.state}/>;}
        return this.props.children;}
}
export default ErrorBoundary;