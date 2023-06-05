import './style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Navbar from './componets/Navbar';
import AboutContainent from './componets/AboutContainent'
function App() {
  return (
    <>
      <Navbar />

      <div id='coverimg' className="p-3 mb-2 bg-transperent text-white my-2">


        <div className="head ">
          <h3>Outstanding and Inspiring Legend of The World</h3>
          <h1>Chhatrapati Shivaji Maharaj</h1>
        </div>
      </div>
      < AboutContainent />

    </>
  );
}

export default App;
