import React, { Component } from 'react';

class App extends Component {
    render(){
        return (
            <div>
                <Link to="/javascript">JavaScript</Link>
                <a href="/haskell">Haskell</a><br />
                <a href="/coffeescript">CoffeeScript</a><br />
                <hr />
            </div>
        )
    }
}

const Link = (props) => {
    return <h1>Link!</h1>
}


export default App;