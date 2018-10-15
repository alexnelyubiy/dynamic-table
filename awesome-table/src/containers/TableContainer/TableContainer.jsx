import React, { Component } from 'react';
import { connect } from "react-redux";
import { createTable } from "../../actions";
import { bindActionCreators } from "redux";
import { modelSelector } from "../../selectors";

class TableContainer extends Component {

    render() {
        const { table } = this.props;
        if(this.props.table.length <= 1) return null;

        let tableTemplate;

        function makeColumns(row) {
            return row.map((item, i) => {
                return <td className="cell" key={i}>{item.value}</td>
            });
        }

        function setCellSum(row) {
            let valueSum = [];
            for(let i = 0; i < row.length; i++){
                valueSum.push(row[i].value)
            }   
            return (
                <td className="cell cellSum">
                    {valueSum.reduce((sum, current) => {
                        return sum + current}, 0)}
                </td>
            )
        }

        tableTemplate = table.map((row, i) => {
            return <tr key={i}>{makeColumns(row)}{setCellSum(row)}</tr>
        })

        function calculateColumnMid() {
            let averageRow = [];
            const columns = table[0].length;
    
            for (let j = 0; j < columns; j++) {
                let columnTotal = 0;
                for (let i = 0; i < table.length; i++) {
                    columnTotal += table[i][j].value;
                }
                let columnAverage = columnTotal / table.length
                averageRow.push(columnAverage)
            }
            return averageRow.map((item, i) => {
                return (
                    <td className="cell cellAverage" key={i}>{Math.floor(item)}</td>
                )
            })
        }
        function averageValue() {
            return (
                <tr>{calculateColumnMid()}</tr>
            )
        }

        return(
            <div className="table_wrapper">
                <table>
                    <tbody>{tableTemplate}{averageValue()}</tbody>
                </table>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ createTable }, dispatch);

export default connect(modelSelector, mapDispatchToProps)(TableContainer);