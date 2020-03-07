import React from 'react';
import PropTypes from 'prop-types';

function PostItem({ post, onDelete }) {
  return (
    <li>
      <artifact id='post'>
        {post}
        <button onClick={onDelete} type="button">Remover</button>
      </artifact>
    </li>
  )
}

PostItem.defaultProps = {
  post: 'Oculto',
}

PostItem.propTypes = {
  post: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
}

export default PostItem;