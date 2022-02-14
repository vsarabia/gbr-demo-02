import React from 'react';
import { withDesign } from 'storybook-addon-designs'

import SectionHeader from "../components/section-header"

export default {
    title: 'Components/Section Header',
    component: SectionHeader,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        label: { 
            control: 'text',
        },
    },
};


const Template = ({label}) => {
    return <SectionHeader label={label} />;
}

export const Default = Template.bind({});
Default.args = {
  label: "Section Heading",
};

Default.parameters = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/cBMyg2kIwjFrxqt5DChNmB/Figma-Storybook-Integration?node-id=2%3A9',
      },
  }