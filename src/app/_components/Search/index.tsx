// components/Search.tsx
'use client'
import { useState } from 'react'
//import { useRouter } from 'next/router'

import classes from './index.module.scss'

const Search: React.FC = () => {
  const [query, setQuery] = useState<string>('')
  //const router = useRouter()

  const handleSearch = () => {
    //router.push(`/search?q=${encodeURIComponent(query)}`)
  }

  return (
    <div className={[classes.searchcontainer].filter(Boolean).join(' ')}>
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default Search
