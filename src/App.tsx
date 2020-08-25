import React, { useState } from 'react'
import { hot } from 'react-hot-loader/root'

interface IProps {
  name: string
  color: string
}

const App: React.FC<IProps> = ({ name, color }) => {
  return <h1 style={{ color }}>{name}</h1>
}

export default hot(App)
