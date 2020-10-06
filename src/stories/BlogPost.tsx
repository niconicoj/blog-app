import React, {useState} from 'react';
import { Tag } from '../types/Tag';
import { Box } from './Box';
import './blogpost.css';

export interface BlogPostProps {
  title: string,
  intro: string,
  date: Date,
  tags: Tag[]
}

/**
 * A Blog post to be displayed in a list, contains title, date, tags and an intro.
 */
export const BlogPost: React.FC<BlogPostProps> = ({
  title, intro, date, tags,
  ...props
}) => {
  const [hover, setHover] = useState(false);
  return (
    <Box
      {...props}
      className={['blog-post'].join(' ')}
      border='single'
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{...hover && {borderColor: "#d3869b"}}}
    >
      <Box
        className={['blog-post-title'].join(' ')}
        style={{...hover && {borderColor: "#d3869b", color: "#e78a4e"}}}
      >
        {title}
      </Box>
      <Box
        className={['blog-post-date'].join(' ')}
      >
        {date.toUTCString()}
      </Box>
      <Box
        className={['blog-post-tag-list'].join(' ')}
      >
        {tags.map((tag, i) => <a href={tag.url} className={['blog-post-tag'].join(' ')} key={i}>#{tag.name}</a>)}
      </Box>

      {intro}

    </Box>
  )
};
