import PlaceholderLeft from './Placeholder-Left/PlaceholderLeft.jsx';
import PlaceholderRight from './Placeholder-Right/PlaceholderRight.jsx';

function Placeholder({ activeStates }) {
  console.log('PlaceholderLeft activeStates:', activeStates);
  return (
    <div className="placeholder">
      <PlaceholderLeft activeStates={activeStates} />
      <PlaceholderRight />
    </div>
  );
}

export default Placeholder;