import { data } from './010/seaPlaners'

function Valtis() {
  const man = data
    .filter((el) => el.type === 'man')
    .map((el) => (
      <div key={el.id} style={{ textAlign: 'left', color: 'burlywood' }}>
        id: {el.id}, type: {el.type}, name: {el.name}, color: {el.color}
      </div>
    ))
  return man
}
export default Valtis
