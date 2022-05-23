import { data } from './010/seaPlaners'

function Akvariumas() {
  const fish = data
    .filter((el) => el.type === 'fish')
    .map((el) => (
      <div key={el.id}>
        id: {el.id}, type: {el.type}, name: {el.name}, color: {el.color}
      </div>
    ))
  return fish
}

export default Akvariumas
