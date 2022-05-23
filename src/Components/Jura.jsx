import { data } from './010/seaPlaners'
import Laivas from './Laivas'
import Valtis from './Valtis'
import Sala from './Sala'

function Jura() {
  // const fish = data[3]
  // const { id, type, name, color } = fish

  const fish = data
    .filter((el) => el.type === 'fish')
    .map((el) => (
      <div key={el.id} style={{ textAlign: 'left', color: 'salmon' }}>
        id: {el.id}, type: {el.type}, name: {el.name}, color: {el.color}
      </div>
    ))
  return (
    <>
      <Valtis />
      <Laivas />
      <Sala />
      {fish}
    </>
  )
}

export default Jura
