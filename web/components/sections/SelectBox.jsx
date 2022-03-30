import React from 'react'
import ReactHTMLTableToExcel from 'react-html-table-to-excel'
import jason from '../../data/dataJson.json'

const { useEffect, useRef, useState } = React;

export default function SelectBox(props) {
  console.log('selectbox', props)
  const [data, setData] = useState([])
  const count = useRef(null);

  const { heading } = props;

  useEffect(() => {
    console.log("test", jason.data);
    setData(jason.data)
  }, [])

  useEffect(() => {
    const click = () => {
      console.log("test 333")
    }
    console.log("test 2", count);
    document.addEventListener('click', click)

    return () => {
      document.removeEventListener('click', click)
      document.querySelector
    }
  })

  const addData = () => {
    fetch('api/modJson', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({
        name: count.current.querySelector('#name').value,
        lastName: count.current.querySelector('#surname').value,
        age: count.current.querySelector('#age').value,
      })
    }).then(res => res.text()).then(res => console.log("res", res))
    let copiedData = [...data]
    copiedData.push({
      name: count.current.querySelector('#name').value,
      lastName: count.current.querySelector('#surname').value,
      age: count.current.querySelector('#age').value,
    })

    console.log("test 4444", count, count.current.querySelector('#name'))

    setData(copiedData)
  }

  return (
    <div className={`formWrapper`}>
      <div className={`form-input`} ref={count}>
        <div className={`inputList`}>
          <input className="textArea" id='name' type="text" placeholder="First name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          <input className="textArea" id='surname' type="text" placeholder="Last name"></input>
          {/* <select className="textArea" id='age' type="selectbox" placeholder="Age">
            <option> </option>
            <option> 35 </option>
            <option> 40 </option>
            <option> 45 </option>
          </select> */}
        </div>
        <button className="button-submit" type="button" onClick={() => addData()}>
          Submit
        </button>
        <ReactHTMLTableToExcel
          id="test-table-xls-button"
          className="download-table-xls-button"
          table="table-to-xls"
          filename="tablexls"
          sheet="tablexls"
          buttonText="Download as XLS"
        />
      </div>
      <table id="table-to-xls">
        <tr>
          <th>Firstname</th>
          <th>Lastname</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
          <th>Age</th>
        </tr>
        {data.map((item, idx) =>
          <tr key={idx}>
            <td id='name'> {item.name} </td>
            <td id='surname'>{item.lastName}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
            <td id='age'>{item.age}</td>
          </tr>
        )}
        {/* <tr>
          <td id='name'>Jill {heading} </td>
          <td id='surname'>Smith</td>
          <td id='age'>50</td>
        </tr>
        <tr>
          <td id='name'>Eve</td>
          <td id='surname'>Jackson</td>
          <td id='age'>94</td>
        </tr> */}
      </table>
    </div>
  )
}
