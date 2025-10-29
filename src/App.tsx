import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Layout from './components/Layout/layout';
import Home from './pages/Home/sections/home';
import About from './pages/About/sections/about';
import RoadMap from './pages/Roadmap/sections/roadmap';
import PathToBuy from './pages/Home/sections/home';
import Partners from './pages/Home/sections/home';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/RoadMap" element={<RoadMap />} />
            <Route index element={<PathToBuy />} />
            <Route index element={<Partners />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
