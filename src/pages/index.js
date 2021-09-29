/**
 * @
 */
import React, { useEffect } from 'react';

const RootComponent = (props) => {
  useEffect(() => {
    console.log(props, 'hhhh')
  }, [props])
  return <div className={}>

  </div>
}

export default RootComponent;