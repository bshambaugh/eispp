import { FaCog } from 'react-icons/fa';
//import '..//scss/Buttons/aettings-button.scss'; // Import the SCSS file
//import styles from '../../scss/Buttons/SettingsButton.module.scss';

function SettingsButton() {
  return (
    /*
    <button className={buttonStyle}  aria-label="Settings">
      <FaCog className={iconStyle} />
    </button> 
    */
    <button className="button-style"  aria-label="Settings">
       <FaCog className="icon-style" />
     </button> 
   /* <button style={buttonStyle}>
      <FaCog style={iconStyle} /> Settings
    </button> */
  );
}

// Optional: Basic styles
/*
const buttonStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  padding: '0px 0px',
  fontSize: '16px',
  cursor: 'pointer',
  backgroundColor: 'transparent', // Makes the button transparent
  border: 'none', // Explicitly no border
};

const iconStyle = {
  fontSize: '16px',
  color: '#808080', // Medium grey for the cogwheel
};
*/

export default SettingsButton;