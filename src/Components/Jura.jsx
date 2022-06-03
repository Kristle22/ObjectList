import Laivas from './Laivas'
import Valtis from './Valtis'
import Sala from './Sala'

function Jura({ data, color }) {
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
      <Valtis list={data} color='crimson' />
      <Laivas list={data} color='crimson' />
      <Sala list={data} color='crimson' />
      {fish}
    </>
  )
}

export default Jura
