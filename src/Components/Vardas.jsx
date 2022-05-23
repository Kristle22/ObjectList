import { data } from './010/seaPlaners'

function Vardas({ color }) {
  const sorted = data
    .sort((a, b) => (a.name > b.name ? 1 : -1))
    .map((el) => (
      <div key={el.id} style={{ textAlign: 'left' }}>
        id: {el.id}, type: {el.type},{' '}
        <span style={{ color: color }}>name: {el.name}</span>, color: {el.color}
      </div>
    ))

  return sorted
}

export default Vardas
