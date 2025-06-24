function PlaceholderLeft({ viewState }) {
  return (
    <div className={`placeholder-left ${viewState === 'state-documents' ? 'state-documents' : ''}`}>
      {viewState === 'defaultState' ? (
        <></>
      ) : viewState === 'state-documents' ? (
        <>
          <div className="placeholder-left-top" />
          <div className="placeholder-left-bottom" />
        </>
      ) : (
        <div className="placeholder-left">Other View Content</div> // Removed extra nesting
      )}
    </div>
  );
}

export default PlaceholderLeft;