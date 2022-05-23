// import { data } from './010/seaPlaners'
import Spalva from './Spalva'
import Tipas from './Tipas'
import Vardas from './Vardas'

function Vandenynas() {
  return (
    <>
      <h4>Sorted by type:</h4>
      <Tipas color='crimson' />
      <h4>Sorted by name:</h4>
      <Vardas color='crimson' />
      <h4>Sorted by color:</h4>
      <Spalva color='crimson' />
    </>
  )
}

export default Vandenynas
