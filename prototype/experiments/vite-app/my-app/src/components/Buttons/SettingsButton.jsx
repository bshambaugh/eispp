import { FaCog } from 'react-icons/fa';
//import '..//scss/Buttons/aettings-button.scss'; // Import the SCSS file
//import styles from '../../scss/Buttons/SettingsButton.module.scss';

function SettingsButton() {
  return (
    <button className="button-style"  aria-label="Settings">
       <FaCog className="icon-style" />
     </button> 
  );
}

export default SettingsButton;