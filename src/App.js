import ReactGoogleSlides from "react-google-slides";

function App() {
  return (
    <div style={{height: '100vh'}}>
      <ReactGoogleSlides
        width={'100%'}
        height={'100%'}
        slidesLink="https://docs.google.com/presentation/d/1sGDpOobCcTgwb4I1iHs0nJZW_ogEsmp4VifuG3c_l28"
        slideDuration={300}
        position={1}
        showControls={true}
        loop={true}
      />
    </div>
  );
}

export default App;
