// import { data } from './010/seaPlaners'

function Akvariumas({ list, color }) {
  if (list.type === 'fish')
    return (
      <div>
        id: {list.id}, type: {list.type},{' '}
        <span style={{ color: color }}> name: {list.name}</span>, color:{' '}
        {list.color}
      </div>
    )
}

export default Akvariumas
