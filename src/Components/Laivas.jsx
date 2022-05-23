import { data } from './010/seaPlaners'

function Laivas() {
  const car = data
    .filter((el) => el.type === 'car')
    .map((el) => (
      <div key={el.id} style={{ textAlign: 'left', color: 'cadetblue' }}>
        id: {el.id}, type: {el.type}, name: {el.name}, color: {el.color}
      </div>
    ))
  return car
}

export default Laivas
