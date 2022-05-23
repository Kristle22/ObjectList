import { data } from './010/seaPlaners'

function Tipas() {
  const sorted = data
    .sort((a, b) => (a.type > b.type ? 1 : -1))
    .map((el) => (
      <div key={el.id} style={{ textAlign: 'left' }}>
        id: {el.id}, <span style={{ color: 'tan' }}>type: {el.type}</span>,
        name: {el.name}, color: {el.color}
      </div>
    ))

  return sorted
}

export default Tipas