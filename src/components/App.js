import React from 'react';
import { connect } from 'react-redux';
import { withRouter , Switch , Route , Link } from 'react-router-dom';
import HomePage from './HomePage';
class App extends React.Component{
    search = () => {
        return(
            <>
                search 
                <Link to="/">Back</Link>
            </>
        )
    }
    render(){
        return (  
            <>          
                <Switch>
                    <Route path="/" component={HomePage} exact/>
                    <Route path="/search" component={this.search}/>
                </Switch>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    const {
        HomeData
    } = state;
    return {
        home:HomeData
    }
};

export default withRouter(
    connect(mapStateToProps)(App)
)