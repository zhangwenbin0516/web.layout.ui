import React, { useEffect } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import RouterComponent from './router';
import configs from './router/root.routes';

const App = () => {
    useEffect(() => {
    }, [])
    return <div>
        <BrowserRouter>
            <RouterComponent routes={ configs } />
        </BrowserRouter>
    </div>
}
render(<App />, document.getElementById('YHUI'));