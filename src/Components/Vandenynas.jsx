import Spalva from './Spalva'
import Tipas from './Tipas'
import Vardas from './Vardas'

function Vandenynas({ data }) {
  return (
    <>
      <h4>Sorted by type:</h4>
      <Tipas list={data} color='crimson' />
      <h4>Sorted by name:</h4>
      <Vardas list={data} color='crimson' />
      <h4>Sorted by color:</h4>
      <Spalva list={data} color='crimson' />
    </>
  )
}

export default Vandenynas
