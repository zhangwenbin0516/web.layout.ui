import React, { useEffect } from 'react';
import { render } from 'react-dom';
import RouterComponent from './src/router';

const App = () => {
    useEffect(() => {
    }, [])
    return <div>
        <RouterComponent />
    </div>
}
render(<App />, document.getElementById('YHUI'));