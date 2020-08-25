import React from 'react'
import App from '../../src/App'

export default {
  title: 'Tsx/App',
  component: App,
  argTypes: {
    name: {
      control: 'text',
      description: 'Text of h1',
      table: {
        defaultValue: { summary: false }
      }
    },
    color: {
      control: 'color',
      description: 'Color of h1',
      table: {
        defaultValue: { summary: false }
      }
    }
  }
}

const MyApp = (args: { name: string; color: string }) => <App {...args} />

export const Basic = MyApp.bind({})

Basic.args = { name: 'DANIELS', color: 'black' }
Basic.parameters = {
  docs: {
    source: {
      code: `<App />`
    }
  }
}
