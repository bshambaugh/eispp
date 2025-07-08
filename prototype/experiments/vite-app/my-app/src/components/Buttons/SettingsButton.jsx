import { FaCog } from 'react-icons/fa';

function SettingsButton() {
  return (
    <button className="button-style"  aria-label="Settings">
       <FaCog className="icon-style" />
     </button> 
  );
}

export default SettingsButton;