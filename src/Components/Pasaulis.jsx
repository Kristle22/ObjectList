// import { data } from './010/seaPlaners'
import Narvas from './Narvas'
import Garazas from './Garazas'
import Namas from './Namas'
import Akvariumas from './Akvariumas'

function Pasaulis({ list, color }) {
  return (
    <>
      <h4 style={{ color: 'peru' }}>Porine Pasaulio dalis:</h4>
      {list.map((el) =>
        el.id % 2
          ? null
          : [
              <Namas key={el.id} list={el} color='crimson' />,
              <Garazas key={el.id} list={el} color='crimson' />,
              <Narvas key={el.id} list={el} color='crimson' />,
              <Akvariumas key={el.id} list={el} color='crimson' />,
            ]
      )}
      <h4 style={{ color: 'peru' }}>Neporine pasaulio dalis:</h4>
      {list.map((el) =>
        el.id % 2
          ? [
              <Namas key={el.id} list={el} color='crimson' />,
              <Garazas key={el.id} list={el} color='crimson' />,
              <Narvas key={el.id} list={el} color='crimson' />,
              <Akvariumas key={el.id} list={el} color='crimson' />,
            ]
          : null
      )}
    </>
  )
}

export default Pasaulis
