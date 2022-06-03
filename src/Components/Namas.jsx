// import { data } from './010/seaPlaners'
function Namas({ list, color }) {
  if (list.type === 'man')
    return (
      <div key={list.id}>
        id: {list.id}, type: {list.type},{' '}
        <span style={{ color: color }}> name: {list.name}</span>, color:{' '}
        {list.color}
      </div>
    )
}
export default Namas
