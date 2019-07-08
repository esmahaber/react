import React from 'react';


class Counter extends React.Component{

    state = {
        number : 0
    };

    arttir = () => {
        console.log('+');
        this.setState({
            number: ++this.state.number
        });
    };

    azalt = () => {
        console.log('-');
        this.setState({
            number: --this.state.number
        });
    };

    render() {
        return(
            <div>
                <h1>{this.state.number}</h1>
                <button onClick={this.arttir}> + </button>
                <button onClick={this.azalt}> - </button>

            </div>


        )
    }

}

export default Counter;
