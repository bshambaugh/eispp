import Placeholder from "./Placeholder/Placeholder.jsx";

function Content({activeStates}) {
    return (
        <main className="content">
          <Placeholder activeStates={activeStates}/>
       </main>
    );
}

export default Content;