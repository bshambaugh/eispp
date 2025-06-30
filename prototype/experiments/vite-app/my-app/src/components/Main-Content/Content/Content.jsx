import { ViewStateContext } from "../../../context/ViewStateContext.jsx";
import Placeholder from "./Placeholder/Placeholder.jsx";
//import { useContext } from "react";


function Content() { 
   // const { viewState } = useContext(ViewStateContext);
    return (
        <main className="content">
          <Placeholder />
       </main>
    );
}

export default Content;