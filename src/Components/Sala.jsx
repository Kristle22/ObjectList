function Sala({ list, color }) {
  const animal = list
    .filter((el) => el.type === 'animal')
    .map((el) => (
      <div key={el.id} style={{ textAlign: 'left', color: 'greenyellow' }}>
        id: {el.id}, type: {el.type},{' '}
        <span style={{ color: color }}> name: {el.name}</span>, color:{' '}
        {el.color}
      </div>
    ))
  return animal
}

export default Sala
