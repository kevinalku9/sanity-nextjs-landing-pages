import React from 'react'
import ReactHTMLTableToExcel from 'react-html-table-to-excel'
const {useEffect, useRef, useState} = React;

export default function SelectBox(props) {
  console.log('selectbox', props)
  const {heading} = props
  console.log('tessasdasda');
  return (
    <div>
      <div className="form-submit">
        <div className="inputList">
          <input className="text-area" id='name' type="text" placeholder="First name"></input>
          <input className="text-area" id='surname' type="text" placeholder="Last name"></input>
          <select className="text-area" id='age' type="selectbox" placeholder="Age">
            <option> </option>
            <option> 35 </option>
            <option> 40 </option>
            <option> 45 </option>
          </select>
        </div>
        <button className="button-submit" type="button">
          Submit
        </button>
      </div>
      <ReactHTMLTableToExcel
        id="test-table-xls-button"
        className="download-table-xls-button"
        table="table-to-xls"
        filename="tablexls"
        sheet="tablexls"
        buttonText="Download as XLS"
      />
      <table id="table-to-xls">
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
        </tr>
        <tr>
          <td id='name'>Jill {heading} </td>
          <td id='surname'>Smith</td>
          <td id='age'>50</td>
        </tr>
        <tr>
          <td id='name'>Eve</td>
          <td id='surname'>Jackson</td>
          <td id='age'>94</td>
        </tr>
      </table>
    </div>
  )
}
