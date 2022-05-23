import { data } from './010/seaPlaners'

function Tipas({ color }) {
  const sorted = data
    .sort((a, b) => (a.type > b.type ? 1 : -1))
    .map((el) => (
      <div key={el.id} style={{ textAlign: 'left' }}>
        id: {el.id}, <span style={{ color: 'tan' }}>type: {el.type}</span>,
        <span style={{ color: color }}>name: {el.name}</span>, color: {el.color}
      </div>
    ))

  return sorted
}

export default Tipas
