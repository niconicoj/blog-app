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
        className={['post-list-title'].join(' ')}
      >
        Latest Post
      </Box>
      {
        posts.map(post => {
          return <BlogPost {...post}/>
        })
      }
    </Box>
  );
};
