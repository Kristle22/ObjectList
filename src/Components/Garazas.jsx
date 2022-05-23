// import { data } from './010/seaPlaners'

function Garazas({ list, color }) {
  if (list.type === 'car')
    return (
      <div>
        id: {list.id}, type: {list.type},{' '}
        <span style={{ color: color }}> name: {list.name}</span>, color:{' '}
        {list.color}
      </div>
    )
}

export default Garazas
