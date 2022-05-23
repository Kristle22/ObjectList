import Daiktas from './Daiktas'
function Tvenkinys({ list }) {
  return (
    <>
      <h2 style={{ color: 'bisque' }}>Even list entries:</h2>
      {list
        .sort((a, b) => (a.id > b.id ? 1 : -1))
        .map((el) => (el.id % 2 ? null : <Daiktas key={el.id} list={el} />))}
      <h2 style={{ color: 'bisque' }}>Odd list entries:</h2>
      {list.map((el) => (el.id % 2 ? <Daiktas key={el.id} list={el} /> : null))}
    </>
  )
}

export default Tvenkinys
