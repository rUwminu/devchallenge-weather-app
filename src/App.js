import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import './App.css'
import './styles.css'

// import MixPage from './components/Pages/Home'
// import MainPage1 from './components/cw1/Pages/MainPage'
// import MainPage2 from './components/cw2/Pages/MainPage'
// import MainPage3 from './components/cw3/Pages/MainPage'
// import MainPage4 from './components/cw4/Pages/MainPage'
// import MainPage5 from './components/cw5/Pages/MainPage'
// import MainPage6 from './components/cw6/Pages/MainPage'
import DevPage from './components/devC1/Pages/MainPage'

function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className='App'>
        <DevPage />
      </div>
    </DndProvider>
  )
}

export default App
