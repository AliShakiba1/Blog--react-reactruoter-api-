import axios from 'axios'
import React from 'react'

import './FullPost.css'

class FullPost extends React.Component {
  state = {
    loadedPost: null,
  }

  componentDidMount() {
    console.log(this.props)
    if (this.props.match.params.id) {
      if (
        !this.state.loadedPost ||
        (this.state.loadedPost &&
          this.state.loadedPost.id !== this.props.match.params.id)
      )
        axios
          .get(
            `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`
          )
          .then(response => {
            this.setState({ loadedPost: response.data })
          })
    }
  }

  deletePostHandler = () => {
    axios
      .delete(
        `https://jsonplaceholder.typicode.com/posts/${this.props.match.params.id}`
      )
      .then(response => {
        console.log(response)
      })
  }

  render() {
    let post = <p style={{ textAlign: 'center' }}>Please select a Post</p>
    if (this.props.match.params.id) {
      post = <p style={{ textAlign: 'center' }}>Loading...</p>
    }
    if (this.state.loadedPost) {
      post = (
        <div className="full-post">
          <h2>{this.state.loadedPost.title}</h2>
          <p>{this.state.loadedPost.body}</p>
          <div>
            <button onClick={this.deletePostHandler} className="delete">
              Delete
            </button>
          </div>
        </div>
      )
    }
    return post
  }
}

export default FullPost
