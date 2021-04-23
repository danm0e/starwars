import React from 'react'
import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
}

const Template = (args) => {
  return <Button {...args}>{args.children}</Button>
}

export const Default = Template.bind({})
Default.args = {
  onClick: () => console.log('hit'),
  children: 'Label',
}
