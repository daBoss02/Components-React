import Header from './components/Header';
import Banner from './components/Banner';
import Gallery from './components/Gallery';
import AleroFront from './media/alero_front.jpg';
import AleroSide from './media/alero_side.jpg';
import Caprice from './media/caprice.jpg';
import Civic from './media/civic.jpg';
import './style/index.css';
const bannerBody = `This page is made using multiple different components.
                    Some of these are a Banner component, a Header component,
                    and a Button Component. Banner takes in props title and body.
                    Header takes no props, and button takes props for name and
                    class. The Button component is added in the banner component
                    instead of the app file.`
const images = [AleroFront, AleroSide,
                Caprice, Civic];

function App() {
  return (
    <main>
      <Header />
      <Banner 
        title="React Components"
        body={bannerBody}
      />
      <Gallery arr={images} />
      <div className="container">
      </div>
    </main>
  );
}

export default App;
