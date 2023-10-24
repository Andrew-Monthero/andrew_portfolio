import About from '@/section/About';
import Contact from '@/section/Contact';
import Experience from '@/section/Experience';
import HeroSection from '@/section/HeroSection';
import Projects from '@/section/Projects';

const App = () => {
  return (
    <div>
      <HeroSection />
      <Projects />
      <About />
      <Experience />
      <Contact />
    </div>
  );
};
export default App;
