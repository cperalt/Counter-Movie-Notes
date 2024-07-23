import { useState } from "react"

function Counter() {
    
    const [count, setCount] = useState(0)

    return (
        <div className=" bg-sky-950 flex flex-col justify-center h-screen items-center">
            <button type="button" className="px-6 py-3.5 text-2xl font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center">
                {`Counter: ${count}`}
            </button>
            <div className="mt-24 flex flex-row w-screen justify-evenly">
                <button onClick={() => setCount((count) => count + 1)} type="button" className="px-6 py-3.5 text-2xl font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">+ 1
                </button>
                <button onClick={() => setCount((count) => count - 1)} type="button" className="px-6 py-3.5 text-2xl font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">- 1
                </button>
                <button onClick={() => setCount((count) => count * 2)} type="button" className="px-6 py-3.5 text-2xl font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">* 2
                </button>
                <button onClick={() => setCount((count) => count ** 2)} type="button" className="px-6 py-3.5 text-2xl font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">^2
                </button>
            </div>
            <button onClick={() => setCount((count) => count * 0)} type="button" className="px-6 py-3.5 text-2xl font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-24">Reset
            </button>
        </div>
    )
}

export default Counter
