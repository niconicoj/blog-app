import React from 'react';
import './post-list.css';
import { BlogPostProps, BlogPost } from './BlogPost';
import { Box } from './Box';

export interface PostListProps {
  posts : BlogPostProps[],
}

/**
 * The main container for anything on the page
 */
export const PostList: React.FC<PostListProps> = ({
  posts,
  ...props
}) => {
  return (
    <Box 
      {...props}
      border="single"
      className={['post-list'].join(' ')}
    >
      <Box
        border="single"
        className={['post-list-title'].join(' ')}
      >
        Latest Post
      </Box>
      <div
        className={['post-list-container'].join(' ')}
      >
        {
          posts.map((post, i) => {
            return <BlogPost {...post} key={i}/>
          })
        }
      </div>
    </Box>
  );
};
