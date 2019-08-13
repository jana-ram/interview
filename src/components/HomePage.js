import React from 'react';
import { connect } from 'react-redux';
import { requestYoutupeApi } from '../actions';
import { Link } from 'react-router-dom';
class HomePage extends React.Component{
    componentDidMount(){
        this.props.requestYoutupeApi();
    }
    render(){
        return(
            <div>Home Page<Link to="/search">Go</Link></div>
        )
    }
}
const mapToState = (state) => {
    const {
        HomeData
    } = state;
    return {
        home:HomeData
    }
}

export default connect(mapToState,{
    requestYoutupeApi
})(HomePage);

