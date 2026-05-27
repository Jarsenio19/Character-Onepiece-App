import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router'
import './SearchResult.css'

const SearchResult = () => {
  const [chars, setChars] = useState([])
  const [searcParams] = useSearchParams()
  const query = searcParams.get('a')

  useEffect(() => {

    const fetchAPI = async () => {
      try {
        const jsonResponse = await fetch('https://api.api-onepiece.com/v2/characters/en')
        const result = await jsonResponse.json()

        const buildChars = result.map((item) => ({
          id: item.id,
          name: item.name,
          ...item,
        }))
        setChars(buildChars)
      } catch (error) {
        console.log('ERROR!', error);
      }
    }
    fetchAPI()
  }, [])

  const searchResults = chars.filter(char =>
    char.name?.toLowerCase().includes(query.toLowerCase()))

  console.log(searchResults);

  const navigate = useNavigate()
  const openModal = () => {
    navigate('/modal')
  }

  return (
    <>

      <div className='container-hero'>
        <div className='container'>
          <div className='box-container'>

            {searchResults.map((item, index) => (

              <div
                className='box'
                key={item.id}
                onClick={() => navigate('/modal')}>
                <h4>Wanted</h4>

                <img src="" alt="image" />
                <h4>DEAD OR ALIVE</h4>
                <h3 key={index}>{item.name}</h3>
                <h2 key={index}>{item.bounty}</h2>
              </div>
            )
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default SearchResult