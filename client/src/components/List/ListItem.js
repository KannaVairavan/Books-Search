import React from "react";

export function ListItem(props) {
  return <li className="list-group-item">
            <h1> {props.title}</h1>
            
            <a href={props.link} target="blank"><button>View</button></a>
            <button { ...props }>{props.children}</button>
            <h4>Author: {props.author}</h4>
            <img src={props.image} alt=""/>
            <p>{props.description}</p>

        </li>;
}
