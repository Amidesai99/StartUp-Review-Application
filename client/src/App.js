
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>STARTUP REVIEW APPLICATION</h1>

      <div className="form">
      <label > STARTUP NAME: </label>
      <input type="text" name="startUPName" />
      <label > REVIEW: </label>
      <input type="text" name="review" />
      <button>Submit</button>
      </div>
    </div>
  );
}

export default App;
