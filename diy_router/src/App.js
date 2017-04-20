import React, { Component } from 'react';
import PropTypes from 'prop-types';
import browserHistory from './browserHistory';

class App extends Component {
    constructor(props){
        super(props);
        browserHistory.subscribe(() => {
            this.forceUpdate();
        });
    }
    render(){
        return (
            <div>
                <Link to="/javascript">JavaScript</Link>
                <Link to="/haskell">Haskell</Link>
                <hr/>
                <Route pattern='/javascript' component={JavaScript}/>
                <Route pattern='/haskell' component={Haskell}/>
            </div>
        )
    }
}

const Route = ({pattern, component }) => {
    return (pattern === location.pathname) 
            ? React.createElement(component)
            : null;
}

const Link = ({to, children, rerender}) => {
    const handleClick = (event) => {
        event.preventDefault();
        browserHistory.navigateTo(to);
    }
    return (
        <a  
            onClick={handleClick}
            style={{display: 'block'}}
            href={to}>
            {children}
        </a>
    )
}

Link.propTypes = {
    to: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired
}

const JavaScript = () => <p>A high-level, dynamic, untyped, and interpreted programming language.</p>
const Haskell = () => <p>A standardized, general-purpose purely functional programming language, with non-strict semantics and strong static typing.</p>

export default App;