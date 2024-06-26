
import './App.css'

function App() {


  return (
    <>
      <div className="App">
        <div className='header'>
        <h1>Submission Form</h1>
        </div>

        <div className='form'>
          <form>
              <label>First Name*</label>
              <input type="text" placeholder="Enter your First name"   required/>
              <label>Last Name*</label>
              <input type="text" placeholder="Enter your First name"   required />

              <label>Email*</label>
              <input type="email" placeholder="Enter your email"   required/>
              <label>Contact*</label>
              <input type="tel" placeholder="Enter your phone number"   required/>

              <label>Gender*</label>
              <select>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>

              <label>Upload Resume*</label>
              <input type="file"  name="file" id="file" placeholder="Enter Upload File" required/>

              <label>Enter Url*</label>
              <input type="url" placeholder="Enter your Url"    required/>
              <label>About*</label>
              <textarea placeholder="Enter your About"  required/>
            <div className='button'>
            <button type="submit" value="Submit">Submit </button>
            <button type='reset' value="reset" >Reset</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default App
