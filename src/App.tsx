import './App.css'

function App() {

  return (
    <>
      <header>
        <h1>Harry Potter</h1>
        <p>View all characters from the Harry Potter universe</p>
        <div className="search">

          <div className="field">
            <label htmlFor="input">Name</label>
            <input type="text" id='input' placeholder='Hermione'/>
          </div>

          <div className="field">
            <label htmlFor="select">Scholl</label>
            <select name="" id="select" >
              <option value="" disabled selected>Choose one</option>
              <option value="">Gryffindor</option>
              <option value="">Slytherin</option>
              <option value="">Hufflepuff</option>
              <option value="">Ravenclaw</option>
            </select>
          </div>

        </div>
      </header>
      <main>
        
      </main>
    </>
  )
}

export default App
