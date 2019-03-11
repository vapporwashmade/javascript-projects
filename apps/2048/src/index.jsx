import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';

class Two extends React.Component {
    render() {
        return (<div>
            <p>2</p>
        </div>);
    }
}

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: []
        };
        var squares = [];
        for (var i = 0; i < 16; i++) {
            squares.push(null);
        }
        i = Math.floor(Math.random() * 8);
        squares[i] = 2;
        i = Math.floor(Math.random() * 8) + 8;
        squares[i] = 2;
        this.state.squares = squares;
    }

    render() {
        return (<div>
                <table>
                    <tbody>
                        <tr>
                            <td>{this.state.squares[0]}</td>
                            <td>{this.state.squares[1]}</td>
                            <td>{this.state.squares[2]}</td>
                            <td>{this.state.squares[3]}</td>
                        </tr>
                        <tr>
                            <td>{this.state.squares[4]}</td>
                            <td>{this.state.squares[5]}</td>
                            <td>{this.state.squares[6]}</td>
                            <td>{this.state.squares[7]}</td>
                        </tr>
                        <tr>
                            <td>{this.state.squares[8]}</td>
                            <td>{this.state.squares[9]}</td>
                            <td>{this.state.squares[10]}</td>
                            <td>{this.state.squares[11]}</td>
                        </tr>
                        <tr>
                            <td>{this.state.squares[12]}</td>
                            <td>{this.state.squares[13]}</td>
                            <td>{this.state.squares[14]}</td>
                            <td>{this.state.squares[15]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>);
    }
}

ReactDOM.render(<Table/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();