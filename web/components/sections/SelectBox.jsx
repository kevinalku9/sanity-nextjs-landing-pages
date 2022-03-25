import React from 'react'

export default function SelectBox(props) {
    console.log("selectbox", props)
    const {heading} = props;
  return (
    <div>SelectBox selected item {heading}</div>
  )
}
