import PlaceholderLeft from './Placeholder-Left/PlaceholderLeft.jsx';
import PlaceholderRight from './Placeholder-Right/PlaceholderRight.jsx';
import { ViewStateContext } from "../../../../context/ViewStateContext.jsx"; // Adjust path
import { useContext } from "react";

function Placeholder() {
  const { viewState } = useContext(ViewStateContext);
  return (
    <div className="placeholder">
      <PlaceholderLeft viewState={viewState} />
      <PlaceholderRight />
    </div>
  );
}

export default Placeholder;