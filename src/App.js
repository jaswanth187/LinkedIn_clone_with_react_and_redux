import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, login } from './features/userSlice';
import { auth } from './firebase.js';
import Feed from './Feed.js';
import Header from './Header.js';
import Sidebar from './Sidebar';
import Login from './Login';
import Widgets from './Widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoURL: userAuth.photoURL,
          })
        );
      } else {
        // handle the case when there is no user authenticated
      }
    });
  }, [dispatch]); // Added `dispatch` to the dependency array

  return (
    <div className="app">
      {/* Header */}
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;



// import React, { useEffect } from 'react';
// import './App.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectUser, login } from './features/userSlice';
// import {auth} from './firebase.js';
// import Feed from './Feed.js'; 
// import Header from './Header.js';
// import Sidebar from './Sidebar';
// import Login from './Login'
// import Widgets from './Widgets';


// function App() {
//   const user = useSelector(selectUser);
//   const dispatch = useDispatch();
//   useEffect(()=>{
// auth.onAuthStateChanged(userAuth=>{
//   if(userAuth){
//     dispatch(
//       login({
//         email:userAuth.email,
//         uid:userAuth.uid,
//         displayName:userAuth.displayName,
//         photoURL:userAuth.photoURL,
//       })
//     )
//   }
//   else{

//   }
// })
//   },[])
//   return (
//     <div className="app">
//     {/* Header */}
//     <Header />
//     {!user ? (
//       <Login />
//     ):(
// <div className="app_body">
//       <Sidebar/>
//       <Feed/>
//       <Widgets/>
//     </div>
    
//     )}
//     </div>
//   );
// }

// export default App;
