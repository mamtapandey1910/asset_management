// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import userprofile from './images/userprofile.jpg'

function App() {
  const [image, setImage] = useState()
  const uploadPhoto = (event) => {

    const img = `url(${URL.createObjectURL(event.target.files[0])})`
    console.log('target', event.target.files[0])
    setImage(img)
    console.log(img)
  }

  useEffect(() => {
    const elem = document.getElementById('profilePhotoId')
    elem.style.backgroundImage = image

  })

  return (
    <div>
      <div className='sidebar'>
        <div className='wrapper'>
          <div className='profilePhoto' id='profilePhotoId'>
            <input type='file' className='my_file' accept='image/*' onChange={e => uploadPhoto(e)} id='profilepic' />
          </div>
          <div className='profileName'>
            Name
          </div>
        </div>
        <label className='profilePhotoLabel' htmlFor='profilepic'> Change photo</label>

        <div className='dashboard'>
          <h1>
            Dashboard
          </h1>
        </div>
      </div>
    </div>
  );
}

export default App;
