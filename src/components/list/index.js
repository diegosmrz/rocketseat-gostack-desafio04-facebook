import React, { Component } from 'react';

import PostItem from '../postItem';

// Estudos
import perfil from '../../assets/perfil.jpg'
import diego from '../../assets/diego.png'

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: 'Diego Martinez',
          avatar: `${diego}`
        },
        date: '14 mar 2020',
        content: 'Mensagem',
        comments: [
          {
            id: 2,
            author: {
              name: 'Perfil2',
              avatar: `${perfil}`
            },
            date: '14 mar 2020',
            content:
              'Mensagem'
          },
        ]
      },
    ]
  };

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem
            key={post.id}
            {...post}
          />
        ))}
      </div>
    );
  }
}

export default PostList;
