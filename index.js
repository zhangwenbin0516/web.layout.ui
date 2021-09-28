import React, { useEffect } from 'react';
import { render } from 'react-dom';
import Table from '@es/table';

const App = () => {
    useEffect(() => {
        console.log(Table)
    }, [])
    return <div>
        <Table />
    </div>
}
render(<App />, document.getElementById('YHUI'));