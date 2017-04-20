import React, { Component } from 'react';
import PropTypes from 'prop-types';
import browserHistory from './browserHistory';

class CoffeeScript extends Component {
    state = {
        countdown: 3
    }
    componentDidMount(){
        this.interval = setInterval(()=>{
            this.setState({
                countdown: this.state.countdown - 1
            })
        }, 1000);
    }
    componentWillUnmount(){
        clearInterval(this.interval);
    }
    render(){
        if (this.state.countdown > 0 ){
            return (
                <p>
                    CoffeeScript is a programming language that transcompiles to JavaScript.
                    So we'll redirect to <code>/javascript</code> in {this.state.countdown}.
                </p>
            )
        } else {
            return <Redirect to="/javascript"/>
        }
    }
}

class Redirect extends Component {
    componentDidMount(){
        browserHistory.navigateTo(this.props.to);
    }
    render(){ return null; }
}

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
                <Link to="/coffeescript">CoffeeScript</Link>
                <hr/>
                <Route pattern='/javascript' component={JavaScript}/>
                <Route pattern='/haskell' component={Haskell}/>
                <Route pattern='/coffeescript' component={CoffeeScript}/>
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