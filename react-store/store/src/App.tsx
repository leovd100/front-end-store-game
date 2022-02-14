import Main from 'pages/main';
import {
  BrowserRouter,
  Routes,
  Route
}
  from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
