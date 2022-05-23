// import { data } from './010/seaPlaners'
import Narvas from './Narvas'
import Garazas from './Garazas'
import Namas from './Namas'
import Akvariumas from './Akvariumas'

function Pasaulis({ list }) {
  return (
    <>
      <h4 style={{ color: 'peru' }}>Porine Pasaulio dalis:</h4>
      {list.map((el) =>
        el.id % 2
          ? null
          : [
              <Namas key={el.id} list={el} />,
              <Garazas key={el.id} list={el} />,
              <Narvas key={el.id} list={el} />,
              <Akvariumas key={el.id} list={el} />,
            ]
      )}
      <h4 style={{ color: 'peru' }}>Neporine pasaulio dalis:</h4>
      {list.map((el) =>
        el.id % 2
          ? [
              <Namas key={el.id} list={el} />,
              <Garazas key={el.id} list={el} />,
              <Narvas key={el.id} list={el} />,
              <Akvariumas key={el.id} list={el} />,
            ]
          : null
      )}
    </>
  )
}

export default Pasaulis
