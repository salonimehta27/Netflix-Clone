import React, { useState } from 'react'

export default function Search() {
    const [search, setSearch] = useState("")
    return (
        <div>
            <input type="text" onChange={(e) => setSearch(e.target.value)}></input>
        </div>
    )
}
