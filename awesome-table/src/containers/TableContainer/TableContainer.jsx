import React, { Component } from 'react';
import { connect } from "react-redux";
import { createTable } from "../../actions";
import { bindActionCreators } from "redux";
import { modelSelector } from "../../selectors";

class TableContainer extends Component {

    getRandomArbitary(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }

    renderCell = () => {
        const cellStyle = {
            height: "20px",
            width: "40px",
            border: "1px solid black"
        }
        return(
            <td className="cell" style={cellStyle}>
                {this.getRandomArbitary(100, 999)}
            </td>
        )
    }

    createColumns = () => {
        let cols = [];
        for (let c = 0; c < this.props.cols; c++) {
           cols.push(this.renderCell());
        }
        return cols;
    }

    renderRows = () => {
        return(
            <tr>
               {this.createColumns()}
            </tr>
        )
    }

    createRows() {
        let rows = [];
        for (let i = 0; i < this.props.rows; i++) {
            rows.push(this.renderRows());
        }
        return rows;   
    }

    render() {
        console.log("OOOOOO", this.createRows(), this.props.table);
        if(this.props.table.lenght <= 1 ) return null
        return(
            
            <div className="table_wrapper">
                <table>
                    <tbody>{this.createRows()}</tbody>
                </table>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createTable }, dispatch);

export default connect(modelSelector, mapDispatchToProps)(TableContainer);