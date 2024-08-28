import { useCount, useCountActions } from '@/store'

function Zustand() {
  const count = useCount()
  const { increment, decrement } = useCountActions()

  return (
    <div>
      <button className="border-black border-2 border-solid p-4" onClick={increment}>
        +
      </button>
      <span className="text-pink-500 mx-2 text-2xl">{count}</span>
      <button className="border-black border-2 border-solid p-4" onClick={decrement}>
        -
      </button>
    </div>
  )
}

export default Zustand
