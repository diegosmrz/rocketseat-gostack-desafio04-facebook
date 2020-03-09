import React, { Component } from 'react';

import PostItem from './PostItem';

class PostList extends Component {
  state = {
    newPost: '',
    posts: ["Diego", "João"]
  };

  componentDidMount() {
    const posts = localStorage.getItem('posts');

    if (posts) {
      this.setState({ posts: JSON.parse(posts) })
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.posts !== this.state.posts) {
      localStorage.setItem('posts', JSON.stringify(this.state.posts))
    }
  }

  handleInputChange = e => {
    this.setState({ newPost: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState({
      posts: [... this.state.posts, this.state.newPost,],
      newPost: '',
    });
  }

  handleDelete = (post) => {
    this.setState({ posts: this.state.posts.filter(p => t !== post) })
  }

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <h1>{this.state.newPost}</h1>
          <ul>
            {this.state.posts.map(post =>
              <PostItem
                key={post}
                tech={post}
                onDelete={() => this.handleDelete(post)} />
            )}
          </ul>
          <input
            type="text"
            onChange={this.handleInputChange}
            value={this.state.newPost} />
          <button type="submit">Enviar</button>
        </form>
      </>
    )
  }
}

export default PostList;