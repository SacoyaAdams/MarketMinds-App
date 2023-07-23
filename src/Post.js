import React, { useRef } from 'react';

function Post() {
  const ref = useRef(null);

  return (
    <div>
      <h1>This is a post</h1>
      <p>The ref is: {ref.current}</p>
    </div>
  );
}

export default Post;