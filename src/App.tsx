import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'

const App: React.FC = () => {
  const [state, setState] = useState('Hi')

  return <h1>{state}</h1>
}

export default hot(App)
