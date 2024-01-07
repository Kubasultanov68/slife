import {useRoutes} from "react-router-dom";
import Layout from "./Layout";
import MyProfile from "./pages/MyProfile";


function App() {
  return useRoutes([
    {
      path: '/',
      element: <Layout/>,
      children: [
        {
          path: '',
          element: (<div style={{height: '1000px'}}></div>)
        },
        {
          path: 'myusername',
          element: <MyProfile/>
        },
        {
          path: 'message'
        },
        {
          path: 'friends'
        },
        {
          path: 'groups'
        },
        {
          path: 'explore'
        },
        {
          path: 'favorites'
        },
        {
          path: 'settings'
        },
      ]
    }
  ])
}

export default App;
