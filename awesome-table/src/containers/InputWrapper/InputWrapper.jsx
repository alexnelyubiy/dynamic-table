import React, { Component } from 'react';
import { connect } from "react-redux";
import { createTable } from "../../actions";
import { bindActionCreators } from "redux";
import { modelSelector } from "../../selectors";


class Inputwrapper extends Component {
    state = {
        inputs: {
            rows: null,
            columns: null
        }    
    }

    getRandomArbitary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    createTable = () => {
        let table = [];
        for (let r = 0; r < this.state.inputs.rows; r++) {
            table[r] = [];
            for (let c = 0; c < this.state.inputs.columns; c++) {
                table[r][c] = { value: this.getRandomArbitary(100, 999) };
            }
        }
        this.props.createTable(table, this.state.inputs.rows, this.state.inputs.columns);
    }

    handleChangeTextInput = key => e => {
        const { value } = e.target;
        this.setState(state => {
          const inputs = { ...state.inputs, [key]: value };
          return { inputs };
        });
    };
    

    render() {
        return(
            <div className="input_wrapper">
                <div>
                    <span>rows: </span>
                    <input 
                        type="number"
                        value={this.state.rows}
                        onChange={this.handleChangeTextInput("rows")}
                    />
                </div>
                <div>
                    <span>columns: </span>
                    <input 
                        type="number"
                        value={this.state.columns}
                        onChange={this.handleChangeTextInput("columns")}
                    />
                </div>
                <button className="button" onClick={this.createTable}>Create table</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createTable }, dispatch);

export default connect(modelSelector, mapDispatchToProps)(Inputwrapper);