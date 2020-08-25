import React from 'react'
import App from '../../src/App'

export default {
  title: 'MDX/App',
  component: App,
  argTypes: {
    name: {
      control: 'text',
      description: 'Text of h1',
      table: {
        defaultValue: { summary: '-' }
      }
    },
    color: {
      control: 'color',
      description: 'Color of h1',
      table: {
        defaultValue: { summary: '-' }
      }
    }
  },
  parameters: { layout: 'centered' }
}

const MyApp = (args: { name: string; color: string }) => <App {...args} />

export const teste = MyApp.bind({})

teste.args = { name: 'DANIELS', color: 'black' }
teste.parameters = {
  docs: {
    source: {
      code: `<App name="DANIELS" color="black"/>`
    }
  }
}
