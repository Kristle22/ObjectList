function Akvariumas({ list, color }) {
  if (list.type === 'fish')
    return (
      <div key={list.id}>
        id: {list.id}, type: {list.type},{' '}
        <span style={{ color: color }}> name: {list.name}</span>, color:{' '}
        {list.color}
      </div>
    )
}

export default Akvariumas
