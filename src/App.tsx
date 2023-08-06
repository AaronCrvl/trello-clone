import NavBar from './components/navbar';
import EditAreaControls from './controls/editAreaControl';

function App() {

  return (
    <div className="App">    
      <div className='w-auto h-auto'>
        <NavBar/>
        <div>      
          <EditAreaControls/>
        </div>
      </div>
    </div>
  );
}

export default App; // !_☄