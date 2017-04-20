import React, { Component } from 'react';
import PropTypes from 'prop-types';

class App extends Component {
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

const Link = ({to, children}) => {
    const handleClick = (event) => {
        event.preventDefault();
        history.pushState({}, null, to);
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
}

const JavaScript = () => <p>A high-level, dynamic, untyped, and interpreted programming language.</p>
const Haskell = () => <p>A standardized, general-purpose purely functional programming language, with non-strict semantics and strong static typing.</p>

export default App;