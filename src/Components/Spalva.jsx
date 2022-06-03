function Spalva({ list, color }) {
  const sorted = list
    .sort((a, b) => (a.color > b.color ? 1 : -1))
    .map((el) => (
      <div key={el.id} style={{ textAlign: 'left' }}>
        id: {el.id}, type: {el.type},{' '}
        <span style={{ color: color }}> name: {el.name}</span>,{' '}
        <span style={{ color: 'cyan' }}>color: {el.color}</span>
      </div>
    ))

  return sorted
}

export default Spalva
