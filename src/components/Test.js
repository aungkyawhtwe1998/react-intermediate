import React from 'react'

export default function Test(props) {
  // return (
  //   <div>
  //      <h3> Hello <i>Lo Hel</i> {props.children}</h3>
  //   </div>
  // )
  return React.createElement('div', {className:"", id:"Byid"},
  React.createElement('h3',{className:"heading"},
  React.createElement('i',{id:"title"},'Lo Hel')));

}
