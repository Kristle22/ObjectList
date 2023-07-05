import Narvas from './Narvas'
import Garazas from './Garazas'
import Namas from './Namas'
import Akvariumas from './Akvariumas'

function Pasaulis({ list }) {
  return (
    <>
      <h4 style={{ color: 'peru' }}>Porine Pasaulio dalis:</h4>
      {list.map((el) =>
        el.id % 2 ? null
          : <Namas list={el} color='crimson' key={el.id} />)}
      -------------------------
      {list.map((el) =>
        el.id % 2 ? null
          : <Garazas list={el} color='crimson' key={el.id} />)}
      -------------------------
      {list.map((el) =>
        el.id % 2 ? null
          : <Narvas list={el} color='crimson' key={el.id} />)}
      -------------------------
      {list.map((el) =>
        el.id % 2 ? null
          : <Akvariumas list={el} color='crimson' key={el.id} />)}
      -------------------------

      <h4 style={{ color: 'peru' }}>Neporine pasaulio dalis:</h4>
      {list.map((el) =>
        el.id % 2 ? <Namas list={el} color='crimson' key={el.id} /> : null)}
      --------------------------
      {list.map((el) =>
        el.id % 2 ? <Garazas list={el} color='crimson' key={el.id} /> : null)}
      --------------------------
      {list.map((el) =>
        el.id % 2 ? <Narvas list={el} color='crimson' key={el.id} /> : null)}
      --------------------------
      {list.map((el) =>
        el.id % 2 ? <Akvariumas list={el} color='crimson' key={el.id} /> : null)}
    </>
  )
}

export default Pasaulis
