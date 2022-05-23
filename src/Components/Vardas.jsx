import { data } from './010/seaPlaners'

function Vardas() {
  const sorted = data
    .sort((a, b) => (a.name > b.name ? 1 : -1))
    .map((el) => (
      <div key={el.id} style={{ textAlign: 'left' }}>
        id: {el.id}, type: {el.type},{' '}
        <span style={{ color: 'violet' }}>name: {el.name}</span>, color:{' '}
        {el.color}
      </div>
    ))

  return sorted
}

export default Vardas
