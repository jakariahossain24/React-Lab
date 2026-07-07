import React from 'react'
import Welcome from './components/Welcome';
import Students from './components/Students';

const App = () => {
  return (
    <>
    <p>This is Welcome Components</p>
    <Welcome />
    <Students name="jakaria" age="23" email="jsk" />
    <Students name="jovan" age="24" email="juk" />
    </>
  )
}

export default App