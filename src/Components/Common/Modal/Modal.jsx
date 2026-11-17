import { IoCloseCircle } from "react-icons/io5";
import { useNavigate } from "react-router";
import './Modal.css'

const Modal = ({ open, close }) => {


  const navigate = useNavigate()

  return (
    <>
      {open &&
        <div className='modal-overlay'>
          <div className='modal-content'>

            <div className="close-btn" onClick={close}>
              <IoCloseCircle />
            </div>

            <h4>Wanted</h4>
            <img src="" alt="" />
            <label> Monkey D. Luffy</label>
            <h4>DEAD OR ALIVE</h4>
            <h3>MONKEY D. LUFFY</h3>
            <h2>3000000000</h2>

            <div>
              <ul>
                {/* capitalize using css */}
                <li>Role</li>
                <li>Crew</li>
                <li>Age</li>
                <li>Height</li>
                <li>Status</li>
              </ul>
              <ul>
                <li>Combatant / First Mate</li>
                <li>Straw Hat Pirates</li>
                <li>21</li>
                <li>181cm</li>
                <li>Alive</li>
              </ul>
            </div>
            <div>
              <h4>Yonko Crew Member</h4>
            </div>
          </div>
        </div>

      }


    </>
  )
}

export default Modal