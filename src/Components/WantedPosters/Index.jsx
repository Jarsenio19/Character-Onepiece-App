import { useNavigate } from 'react-router'
import './Hero.css'
import { useEffect, useState } from 'react'
import Modal from '../Common/Modal/Modal'

const WantedPosters = () => {

  const [chars, setChars] = useState([])
  const [openModal, setOpenModal] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {

    const fetchAPI = async () => {
      try {
        const jsonResponse = await fetch('https://api.api-onepiece.com/v2/characters/en')
        const result = await jsonResponse.json()
        setChars(result)
        setError('')
      } catch (error) {
        console.log('ERROR!', error)
        setError('Something went wrong!')
      }
    }
    fetchAPI()
  }, [])


  const navigate = useNavigate()
  const handleOpenModal = () => {
    setOpenModal(true)
  }

  const handleCloseModal = () => {
    setOpenModal(false)
  }




  const luffyCrew = chars.filter(char => char.id >= 1 && char.id <= 10)
  return (

    <div className='container-hero'>
      <div className='container'>
        {error &&
          <div>
            {error}
          </div> // If error //
        }
        <div className='box-container'>

          {luffyCrew.map((item, index) => (

            <div key={index}
              className='box'
              onClick={handleOpenModal}>
              <h4>Wanted</h4>

              <img src="" alt="image" />
              {/* <label key={index}> {item.name}</label> */}
              <h4>DEAD OR ALIVE</h4>
              <h3 >{item.name}</h3>
              <h2 >{item.bounty}</h2>
            </div>
          )
          )}
        </div>
      </div>

      <Modal
        open={openModal}
        close={handleCloseModal}
        s />

    </div>
  )
}

export default WantedPosters