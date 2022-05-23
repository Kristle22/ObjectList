function Daiktas({ list, color }) {
  return (
    <div style={{ textAlign: 'left' }}>
      <i>id: </i> <b style={{ color: 'royalblue' }}>{list.id}, </b>
      <i>type: </i>
      <b>{list.type}, </b>
      <span style={{ color: color }}>
        <i>name: </i>
        <b>{list.name}, </b>
      </span>
      <i>color: </i>
      <b>{list.color}, </b>
    </div>
  )
}

export default Daiktas
