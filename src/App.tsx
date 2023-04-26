import React from 'react'
import LoginBox from './components/LoginBox'

import './App.css'

const App: React.FC<{}> = () => {
    return <div className='main' id="main">
        <div className='main__bg' />
        <LoginBox/>
    </div>
}

export default App