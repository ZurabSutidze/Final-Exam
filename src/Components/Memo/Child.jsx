import React from 'react'

function Child() {
    console.log("zuka")
  return (
    <div>Child</div>
  )
}

export default React.memo(Child)