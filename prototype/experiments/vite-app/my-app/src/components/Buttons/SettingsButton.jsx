import { FaCog } from 'react-icons/fa';
import { useState} from 'react';
import Preferences from '../Modals/Preferences.jsx'

function SettingsButton() {
  const [isModalOpen,setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
    <button className="button-style"  aria-label="Settings" onClick={toggleModal}>
       <FaCog className="icon-style" />
     </button> 
     {isModalOpen && <Preferences onClose={toggleModal}/>}
    </>
  );
}

export default SettingsButton;