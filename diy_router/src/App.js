import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
    rerender = () => {
        this.forceUpdate();
    }
    render(){
        return (
            <div>
                <Link to="/javascript" rerender={this.rerender}>JavaScript</Link>
                <Link to="/haskell" rerender={this.rerender}>Haskell</Link>
                <Link to="/haskell" rerender={this.rerender}>Haskell</Link>
                <Link to="/haskell" rerender={this.rerender}>Haskell</Link>
                <Link to="/haskell" rerender={this.rerender}>Haskell</Link>
                <Link to="/haskell" rerender={this.rerender}>Haskell</Link>
                
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
        history.pushState({}, null, to);
        rerender();
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
    children: PropTypes.string.isRequired,
    rerender: PropTypes.func.isRequired
}

const JavaScript = () => <p>A high-level, dynamic, untyped, and interpreted programming language.</p>
const Haskell = () => <p>A standardized, general-purpose purely functional programming language, with non-strict semantics and strong static typing.</p>

export default App;