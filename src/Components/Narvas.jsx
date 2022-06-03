function Narvas({ list, color }) {
  if (list.type === 'animal')
    return (
      <div key={list.id}>
        id: {list.id}, type: {list.type},{' '}
        <span style={{ color: color }}> name: {list.name}</span>, color:{' '}
        {list.color}
      </div>
    )
}

export default Narvas
