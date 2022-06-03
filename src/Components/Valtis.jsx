function Valtis({ list, color }) {
  const man = list
    .filter((el) => el.type === 'man')
    .map((el) => (
      <div key={el.id} style={{ textAlign: 'left', color: 'burlywood' }}>
        id: {el.id}, type: {el.type},{' '}
        <span style={{ color: color }}> name: {el.name}</span>, color:{' '}
        {el.color}
      </div>
    ))
  return man
}
export default Valtis
