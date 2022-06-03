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
              <Namas list={el} color='crimson' />,
              <Garazas list={el} color='crimson' />,
              <Narvas list={el} color='crimson' />,
              <Akvariumas list={el} color='crimson' />,
            ]
      )}
      <h4 style={{ color: 'peru' }}>Neporine pasaulio dalis:</h4>
      {list.map((el) =>
        el.id % 2
          ? [
              <Namas list={el} color='crimson' />,
              <Garazas list={el} color='crimson' />,
              <Narvas list={el} color='crimson' />,
              <Akvariumas list={el} color='crimson' />,
            ]
          : null
      )}
    </>
  )
}

export default Pasaulis
