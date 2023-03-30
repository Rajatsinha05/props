import React from 'react'
import User from './User'

function App() {
  let skill=[{"hobbie":"coding"},{"hobbie":"reading"}]
  return (
    <div>
      <User name="aneri" skills={skill}/>
    </div>
  )
}

export default App