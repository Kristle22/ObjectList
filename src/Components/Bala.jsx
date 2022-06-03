function Bala({ list, color }) {
  return (
    <>
      {list
        .sort((a, b) => a.id - b.id)
        .map((el) => (
          <div key={el.id} style={{ textAlign: 'left' }}>
            <b style={{ color: 'gold' }}>id: {el.id}</b>, type: {el.type},{' '}
            <span style={{ color: color }}> name: {el.name}</span>, color:{' '}
            {el.color}{' '}
          </div>
        ))}
    </>
  )
}

export default Bala
