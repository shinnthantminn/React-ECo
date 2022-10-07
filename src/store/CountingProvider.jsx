import {createContext,useState} from 'react'

export const CountingContext = createContext()

const CountingProvider = ({children}) => {

    const [count,setCount] = useState(0);
    const [select,setSelect] = useState(0);
    const [index,setIndex] = useState(0);

    const handleCounting = (type) => type ? setCount(pre => pre + 1) : count > 0 && setCount(pre => pre - 1)

    const handleChange = (e) => {
        setCount(+e.target.value)
    }

    const handleAdd = () => {
        setSelect(count)
    }

    const handleIndexChange = (e) => {
        setIndex(e)
    }

    const handleDelete = ( )=> {
        setSelect(0)
    }

    const value = {
        count,
        handleCounting,
        handleChange,
        handleAdd,
        select,
        index,
        handleIndexChange,
        handleDelete
    }

  return (
    <CountingContext.Provider value={value}>{children}</CountingContext.Provider>
  )
}

export default CountingProvider