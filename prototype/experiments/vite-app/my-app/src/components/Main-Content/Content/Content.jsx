import Placeholder from "./Placeholder/Placeholder.jsx";

function Content({viewState}) {
    return (
        <main className="content">
          <Placeholder viewState={viewState}/>
       </main>
    );
}

export default Content;