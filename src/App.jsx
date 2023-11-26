import { useState } from 'react';
import Home from './pages/Home';
import NavigationBar from './compunents/NavigationBar';
import FooterSection from './compunents/FooterSection';



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavigationBar />
      <Home />
      <FooterSection />
    </>
  );
}

export default App;
