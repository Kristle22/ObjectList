import { data } from './010/seaPlaners'

function Spalva() {
  const sorted = data
    .sort((a, b) => (a.color > b.color ? 1 : -1))
    .map((el) => (
      <div key={el.id} style={{ textAlign: 'left' }}>
        id: {el.id}, type: {el.type}, name: {el.name},{' '}
        <span style={{ color: 'cyan' }}>color: {el.color}</span>
      </div>
    ))

  return sorted
}

export default Spalva
