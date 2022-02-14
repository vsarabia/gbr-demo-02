import React from 'react';
import { withDesign } from 'storybook-addon-designs'

import RockefellerPost from "../components/Rockefeller-Post"

export default {
    title: 'Components/Rockefeller Post',
    component: RockefellerPost,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        title: { 
            control: 'text',
            description: 'Post title',
            defaultValue: 'Default Post Title',
        },
        img: { 
            control: 'text',
            description: 'Post thumbnail',
        },
        excerpt: { 
            control: 'text',
        },
        author: { 
            control: 'text',
            description: 'Post author. If no author is provided, it will not be added.',
        },
        url: { 
            description: 'Where the user will be redirected after clicking the element.',
            type: { name: 'string', required: false },
            control: {
                type: null
            },
        },
    },
};


const Template = ( args ) => {
    return <RockefellerPost {...args} />;
}

export const Default = Template.bind({});
Default.args = {
  author: "Victor Sarabia",
};

// Default.parameters = {
//     design: {
//         type: 'figma',
//         url: 'https://www.figma.com/file/cBMyg2kIwjFrxqt5DChNmB/Figma-Storybook-Integration?node-id=2%3A9',
//       },
//   }