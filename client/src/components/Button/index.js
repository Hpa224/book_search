import React from "react";


export function Button(props) {
  return (
    <button {...props} className="btn btn-success" href="/search" onClick={(e) => props.booksearch(e)}>
      {props.children}
      Click to search
    </button>
  );
}
  
  export default Button