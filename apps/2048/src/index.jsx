import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import * as serviceWorker from './serviceWorker';

class Number extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: this.props.number
        };
    }

    render() {
        return (<div className={this.state.number === undefined ? 'empty' : 'number'}>
            <p>{this.state.number}</p>
        </div>);
    }
}

class Table extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            squares: []
        };
        this.create = this.create.bind(this);
        this.down = this.down.bind(this);
    }

    create() {
        console.log(this.state.squares);
        var a = [];
        for (var i = 0; i < 16; i++) {
            a.push(undefined);
        }
        console.log('i do a fill');
        i = Math.floor(Math.random() * 8);
        a[i] = 2;
        i = Math.floor(Math.random() * 8) + 8;
        a[i] = 2;
        console.log(a);
        this.setState({
            squares: a
        }, this.render);
    }

    componentWillMount() {
        this.create();
    }

    down() {
        console.log('x');
        // function move() {
        //     var moves = [];
        //     for (var i = 4; i < 16; i += 4) {
        //         if (this.state.squares[i - 4] === null && this.state.squares[i] !== null) {
        //             this.state.squares[i - 4] = this.state.squares[i];
        //             this.state.squares[i] = null;
        //             document.getElementById((i - 4).toString()).innerText = this.state.squares[i - 4].toString();
        //             document.getElementById((i).toString()).innerText = this.state.squares[i].toString();
        //         }
        //         if (this.state.squares[i - 3] === null && this.state.squares[i + 1] !== null) {
        //             this.state.squares[i - 3] = this.state.squares[i + 1];
        //             this.state.squares[i + 1] = null;
        //             document.getElementById((i - 3).toString()).innerText = this.state.squares[i - 3].toString();
        //             document.getElementById((i + 1).toString()).innerText = this.state.squares[i + 1].toString();
        //         }
        //         if (this.state.squares[i - 2] === null && this.state.squares[i + 2] !== null) {
        //             this.state.squares[i - 2] = this.state.squares[i + 2];
        //             this.state.squares[i + 2] = null;
        //             document.getElementById((i - 2).toString()).innerText = this.state.squares[i - 2].toString();
        //             document.getElementById((i + 2).toString()).innerText = this.state.squares[i + 2].toString();
        //         }
        //         if (this.state.squares[i - 1] === null && this.state.squares[i + 3] !== null) {
        //             this.state.squares[i - 1] = this.state.squares[i + 3];
        //             this.state.squares[i + 3] = null;
        //             document.getElementById((i - 1).toString()).innerText = this.state.squares[i - 1].toString();
        //             document.getElementById((i + 3).toString()).innerText = this.state.squares[i + 3].toString();
        //         }
        //     }
        // }
        //
        // move();
    }

    render() {
        return (<div>
                <table className="table">
                    <tbody>
                        <tr>
                            <td className="td"><Number number={this.state.squares[0]}/></td>
                            <td className="td"><Number number={this.state.squares[1]}/></td>
                            <td className="td"><Number number={this.state.squares[2]}/></td>
                            <td className="td"><Number number={this.state.squares[3]}/></td>
                        </tr>
                        <tr>
                            <td className="td"><Number number={this.state.squares[4]}/></td>
                            <td className="td"><Number number={this.state.squares[5]}/></td>
                            <td className="td"><Number number={this.state.squares[6]}/></td>
                            <td className="td"><Number number={this.state.squares[7]}/></td>
                        </tr>
                        <tr>
                            <td className="td"><Number number={this.state.squares[8]}/></td>
                            <td className="td"><Number number={this.state.squares[9]}/></td>
                            <td className="td"><Number number={this.state.squares[10]}/></td>
                            <td className="td"><Number number={this.state.squares[11]}/></td>
                        </tr>
                        <tr>
                            <td className="td"><Number number={this.state.squares[12]}/></td>
                            <td className="td"><Number number={this.state.squares[13]}/></td>
                            <td className="td"><Number number={this.state.squares[14]}/></td>
                            <td className="td"><Number number={this.state.squares[15]}/></td>
                        </tr>
                    </tbody>
                </table>
            </div>);
    }
}

class Game extends React.Component {
    newGame() {
        this.refs.table.create();
    }

    render() {
        return (<div>
            <Table ref="table"/>
            <button id="newGame" onClick={this.newGame.bind(this)}>New Game</button>
        </div>);
    }
}

ReactDOM.render(<Game/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();