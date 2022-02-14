import React from 'react';
import { withDesign } from 'storybook-addon-designs'

import SectionWithCards from "../components/Section-with-Cards"

export default {
    title: 'Components/Section with Cards',
    component: SectionWithCards,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    // },
};


const Template = ( args ) => {
    return <SectionWithCards />;
}

export const Default = Template.bind({});
// Default.args = {

// };

// Default.parameters = {
//     design: {
//         type: 'figma',
//         url: 'https://www.figma.com/file/cBMyg2kIwjFrxqt5DChNmB/Figma-Storybook-Integration?node-id=2%3A9',
//       },
//   }