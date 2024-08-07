import { useCount, useCountActions } from '@/store'

function Zustand() {
  const count = useCount()
  const { increment, decrement } = useCountActions()

  return (
    <div>
      <button className="p-4 border-2 border-black border-solid" onClick={increment}>
        +
      </button>
      <span className="mx-2 text-2xl text-pink-500">{count}</span>
      <button className="p-4 border-2 border-black border-solid" onClick={decrement}>
        -
      </button>
    </div>
  )
}

export default Zustand
