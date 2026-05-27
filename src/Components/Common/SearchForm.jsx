import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const SearchForm = ({ children }) => {
  const [input, setInput] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search?a=${input}`)
    setInput('')
  }

  return children({ input, setInput, handleSubmit })
}

export default SearchForm