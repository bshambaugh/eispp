function PlaceholderLeft({ activeStates }) {
  return (
    <div className={`placeholder-left ${activeStates.includes('state-documents') ? 'state-documents' : ''}`}>
      {activeStates.includes('defaultState') ? (
         <></>
       ) : activeStates.includes('state-documents') ? (
         <>
           <div className="placeholder-left-top" />
           <div className="placeholder-left-bottom" />
         </>
       ) : (
         <div className="placeholder-left">Other View Content</div>
       )}
     </div>
  );
  }



export default PlaceholderLeft;