/**
 * @
 */
import React, { useEffect } from 'react';

const RootComponent = (props) => {
  useEffect(() => {
    console.log(props, 'hhhh')
  }, [props])
  return <React.Fragment key="111"></React.Fragment>
}

export default RootComponent;