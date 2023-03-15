import React, {useState, useEffect , createContext} from 'react'

export const DataContext = createContext()

export const DataProvider = (props) => {
    const [todos,setTodos] = useState([
        {name:"coding", complete:false},
        {name:"leetcode", complete:false},
        {name:"todo", complete:true}

    ])
    return (
        <DataContext.Provider value={[todos,setTodos]}>
            {props.children}
        </DataContext.Provider>
    )
}
