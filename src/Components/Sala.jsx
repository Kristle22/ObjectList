import { data } from './010/seaPlaners'

function Sala({ color }) {
  const animal = data
    .filter((el) => el.type === 'animal')
    .map((el) => (
      <div key={el.id} style={{ textAlign: 'left', color: 'greenyellow' }}>
        id: {el.id}, type: {el.type},{' '}
        <span style={{ color: color }}> name: {el.name}</span>, color:{' '}
        {el.color}
      </div>
    ))
  return animal
}

export default Sala
