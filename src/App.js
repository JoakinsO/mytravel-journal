// import './App.css';
import Navbar from './components/Navbar';
import MainSection from './components/Main';
import Footer from './components/Footer';
import myLocations from './myLocations';

function App() {  
  const newLocations = myLocations.map(place => {
    return (
    <MainSection
      key = {place.id}
      {...place}
    />)
  })

  return (
    <div className='app-div'>
      <Navbar />
      
      <section>
        {newLocations}
      </section>
        
      <Footer />

      
    </div>

  )
}

export default App;
