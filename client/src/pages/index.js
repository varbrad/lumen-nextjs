import { useState } from 'react'
import useSWR from 'swr'

const fetcher = (url, id) => fetch(url + '/' + id).then(r => r.json())

const Index = () => {
    const [counter, setCounter] = useState(1)
    const { data } = useSWR(['//localhost:8080/api', counter], fetcher)

    return (
        <div>
            <p>Counter is {counter}</p>
            <button onClick={() => setCounter(counter + 1)}>+1</button>
            <button onClick={() => setCounter(counter - 1)}>-1</button>
            <p>API Response</p>
            <pre>{data}</pre>
        </div>
    )
}

export default Index
