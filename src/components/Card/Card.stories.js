import React from 'react'
import Card from './Card'

export default {
  title: 'Components/Card',
  component: Card,
}

const Template = (args) => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  title: 'Some character name',
  image: {
    src: 'https://via.placeholder.com/300x200',
    alt: 'Some alt tag',
  },
  url: 'some-url',
  onClick: () => console.log('clicked'),
}
