import './App.css'
import Header from './assets/components/Header'
import MyProfile from './assets/components/MyProfile'
import SideBtn from './assets/components/SideBtn'
import Sidecomp from './assets/components/Sidecomp'
import Input from './assets/components/Input'
import Post from './assets/components/Post'
import Eevents from './assets/components/Events'
import Request from './assets/components/Request'
function App() {
  return (
    <>
      <Header/>
      <div className="container-fluid d-flex flex-column flex-md-row">
   
        <div className="col-md-3 my-3 col-12 mb-4">
          <MyProfile/>
          <SideBtn/>
          <Sidecomp/>
        </div>
        
      
        <div className="col-md-7 my-3">
          <Input/>

          <div className="posts-section">
            <Post 
              userName="John Doe" 
              userImg="./img/avatar2.png" 
              time="20 min"
              postText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              images={["./img/lights (1).jpg", "./img/nature.jpg"]}
            />
            <Post 
              userName="Jane Doe" 
              userImg="./img/avatar5.png" 
              time="16 min"
              postText="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            />
            <Post 
              userName="Angie Jane" 
              userImg="./img/avatar6.png" 
              time="1 min"
              postText="Have you seen this?"
              images={["./img/nature.jpg"]}
            />
          </div>
        </div>
        <div className="col-md-2 my-3 ">
<Eevents/>
<Request/>
        </div>
      </div>
    </>
  )
}

export default App;
