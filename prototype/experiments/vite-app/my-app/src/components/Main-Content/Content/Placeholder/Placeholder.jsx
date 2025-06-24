import PlaceholderLeft from './Placeholder-Left/PlaceholderLeft.jsx';
import PlaceholderRight from './Placeholder-Right/PlaceholderRight.jsx';

function Placeholder({ viewState }) {
  return (
    <div className="placeholder">
      <PlaceholderLeft viewState={viewState} />
      <PlaceholderRight />
    </div>
  );
}

export default Placeholder;