import { useNavigate } from 'react-router'
import './Hero.css'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [chars, setChars] = useState([])
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
        console.log('ERROR!', error)
      }
    }
    fetchAPI()
  }, [])


  const navigate = useNavigate()
  const openModal = () => {
    navigate('/modal')
  }


  const luffyCrew = chars.filter(char => char.id >= 1 && char.id <= 10)
  return (

    <div className='container-hero'>
      <div className='container'>
        <div className='box-container'>

          {luffyCrew.map((item, index) => (

            <div className='box' onClick={() => navigate('/modal')}>
              <h4>Wanted</h4>

              <img src="" alt="image" />
              {/* <label key={index}> {item.name}</label> */}
              <h4>DEAD OR ALIVE</h4>
              <h3 key={index}>{item.name}</h3>
              <h2 key={index}>{item.bounty}</h2>
            </div>
          )
          )}
        </div>
      </div>

    </div>
  )
}

export default Hero