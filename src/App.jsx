import { useState } from 'react';
import { Header, Home, About, Skills, Projects, Contact, Footer } from "./components";

const App = () => {
  const [activeNavItem, setActiveNavItem] = useState('home');

  return (
    <>
      <Header activeNavItem={activeNavItem} setActiveNavItem={setActiveNavItem} />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer activeNavItem={activeNavItem} setActiveNavItem={setActiveNavItem} />
    </>
  )
}

export default App;
