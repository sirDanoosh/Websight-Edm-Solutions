import React from 'react'
import LoginBox from './components/LoginBox'

import './App.css'

const App: React.FC<{}> = () => {
    const tableView = window.location.pathname === '/table';
    
    return <div className='main' id="main">
        <div className='main__bg' />
        {tableView ? <div>table</div> : <LoginBox />}
    </div>
}

export default App