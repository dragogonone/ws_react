// Import Polyfills first
import 'isomorphic-fetch'
import React from 'react';
import { render } from 'react-dom';
import App from './App';
import Header from './Header';
import NewColumn from './NewColumn.js'

var Search = React.createClass({
    getInitialState: function() {
        return { showResults: false };
    },
    onClick: function() {
        this.setState({ showResults: true });
    },
    render: function() {
        return (
            <div>
                <input type="submit" value="インターンシップの募集" onClick={this.onClick} />
                { this.state.showResults ? <Results /> : null }
            </div>
        );
    }
});

var Results = React.createClass({
    render: function() {
        return (
            <div id="results" className="search-results">
                <App></App>
            </div>
        );
    }
});
render(<Search />, document.getElementById('root'));
render(<Header />, document.getElementById('header'));
render(<NewColumn />, document.getElementById('newColumn'));
render(<NewColumn />, document.getElementById('second'));
