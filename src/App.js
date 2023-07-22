
import './App.css';
import ColorMixCharts from './components/ColorMixCharts';
import SideNavbar from './components/SideNavbar';
import HeroL from './components/hero/HeroL';
import BarChart from './components/hero/BarChart';
import HeroM from './components/hero/HeroM';
import HeroR from './components/hero/HeroR';


function App() {
  return (
    <div className="flex md:ml-4 flex-wrap">
    <div className="sm:hidden hidden lg:block">
  <SideNavbar />
</div>
    
    <div className="flex flex-wrap">
    <HeroL/>
    <HeroM/>
    </div>
    <HeroR/>
    
    </div>
  );
}

export default App;
