import { data } from './010/seaPlaners'
import Laivas from './Laivas'
import Valtis from './Valtis'
import Sala from './Sala'

function Jura({ color }) {
  // const fish = data[3]
  // const { id, type, name, color } = fish

  const fish = data
    .filter((el) => el.type === 'fish')
    .map((el) => (
      <div key={el.id} style={{ textAlign: 'left', color: 'cyan' }}>
        id: {el.id}, type: {el.type},{' '}
        <span style={{ color: color }}>name: {el.name}</span>, color: {el.color}
      </div>
    ))
  return (
    <>
      <Valtis color='crimson' />
      <Laivas color='crimson' />
      <Sala color='crimson' />
      {fish}
    </>
  )
}

export default Jura
