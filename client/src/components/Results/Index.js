import React, {Componennt} from "React"
import Image from "../Image"

export function Searchresults({child}) {
  return (
  <ul className="list">{child}</ul>
  )
}

export class Book extends Componennt {
  render() {
    return (
      <li>
      <div className="books">
          <Row>
              <Image src={this.props.image} />
          </Row>
          <Row>
              <h1>{this.props.title}</h1>
          </Row>
          <Row>
              <h3>{this.props.authors.join(", ")}</h3>
          </Row>
          <Row>
              <p>{this.props.description}</p>
              <a target="_blank" href={this.props.link}>Click to View</a>
          </Row>
      </div>
  </li>
    )
  }
}