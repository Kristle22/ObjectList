import './App.css'
import { data } from './Components/010/seaPlaners'
import OddorEven from './Components/010/OddorEven'
import Patchwork from './Components/010/PatchWork.jsx'
import Jura from './Components/Jura'
import Pasaulis from './Components/Pasaulis'
import Tvenkinys from './Components/Tvenkinys'
import Vandenynas from './Components/Vandenynas'
import Bala from './Components/Bala'

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
          <h3>Masyvas SeaPlaners</h3>
          <Bala list={data} color='crimson' />
          <Tvenkinys list={data} color='red' />
          <h3 style={{ color: 'skyblue' }}>Komponentas Jura</h3>
          <Jura data={data} color='crimson' />
          <h3 style={{ color: 'seagreen' }}>Komponentas Vandenynas</h3>
          <Vandenynas data={data} />
          <h3>Komponentas Pasaulis</h3>
          <div style={{ textAlign: 'left' }}>
            <Pasaulis list={data} />
          </div>
        </div>
      </header>
    </div>
  )
}
export default App
