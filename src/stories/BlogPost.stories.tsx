import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import './box.custom.css';
import { BlogPost, BlogPostProps } from './BlogPost';

export default {
  title: 'Example/Blog Post',
  component: BlogPost,
} as Meta;

const Template: Story<BlogPostProps> = (args) => {
  return (
    <BlogPost {...args} />
  )
}

export const SimpleBlogPost = Template.bind({});
SimpleBlogPost.args = {
  title: "My blog post title",
  intro: "This is an introduction to the post content",
  date: new Date(),
  tags: [
    {
      name: "css",
      url: "/tag/css"
    },
    {
      name: "javascript",
      url: "/tag/javascript"
    },
    {
      name: "storybook",
      url: "/tag/storybook"
    },
  ]
};
