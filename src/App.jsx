import './App.css'
import { data } from './Components/010/seaPlaners'
import OddorEven from './Components/010/OddorEven'
import Patchwork from './Components/010/PatchWork.jsx'
import Jura from './Components/Jura'
import Pasaulis from './Components/Pasaulis'
import Tvenkinys from './Components/Tvenkinys'
import Vandenynas from './Components/Vandenynas'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div>
          <h3>The array of seaPlaners:</h3>
          <Patchwork />
          <h3>Even entries:</h3>
          <OddorEven entry='even' />
          <h3>Odd entries:</h3>
          <OddorEven entry='odd' />
          <Tvenkinys list={data} />
          <h3 style={{ color: 'skyblue' }}>Komponentas Jura</h3>
          <Jura />
          <h3 style={{ color: 'seagreen' }}>Komponentas Vandenynas</h3>
          <Vandenynas />
          <h3>Komponentas Pasaulis</h3>
          <div style={{ textAlign: 'left' }}>
            <Pasaulis list={data} color='red' />
          </div>
        </div>
      </header>
    </div>
  )
}
export default App
