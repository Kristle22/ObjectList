import { data } from './010/seaPlaners'

function Laivas({ color }) {
  const car = data
    .filter((el) => el.type === 'car')
    .map((el) => (
      <div key={el.id} style={{ textAlign: 'left', color: 'cadetblue' }}>
        id: {el.id}, type: {el.type},{' '}
        <span style={{ color: color }}> name: {el.name}</span>, color:{' '}
        {el.color}
      </div>
    ))
  return car
}

export default Laivas
