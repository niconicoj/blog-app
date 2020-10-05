import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { PostList, PostListProps } from './PostList';

export default {
  title: 'Example/PostList',
  component: PostList,
  argTypes: {
    color: { control: 'color' },
  },
} as Meta;

const Template: Story<PostListProps> = (args) => {
  return (
    <PostList {...args}/>
  )
}

export const SimplePostList = Template.bind({});
SimplePostList.args = {
  posts: [
    {
      title: 'first post',
      intro: "This is the intro to the first post. is pretty short.",
      date: new Date(),
      tags: [
        {name: "rust", url: "tag/rust"},
        {name: "javascript", url: "tag/javascript"},
        {name: "storybook", url: "tag/storybook"}
      ]
    },
    {
      title: 'second post',
      intro: "This is the intro to the second post. This one is longer and demonstrate that we can actually fit a fair ammount of info in a post intro. wowee.",
      date: new Date(),
      tags: [
        {name: "rust", url: "tag/rust"},
        {name: "javascript", url: "tag/javascript"},
        {name: "storybook", url: "tag/storybook"}
      ]
    },
    {
      title: 'third post',
      intro: "This is the intro to the thir post. this one is short too.",
      date: new Date(),
      tags: [
        {name: "rust", url: "tag/rust"},
        {name: "javascript", url: "tag/javascript"},
        {name: "storybook", url: "tag/storybook"}
      ]
    },
  ]
};

