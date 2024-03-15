import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import './App.css';
import Body from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import MainContainer from './components/MainContainer';
import Watchpage from './components/Watchpage';

const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body />,
  children: [
    {
      path: "/",
      element: <MainContainer />
    },
    {
      path: "watch",
      element: <Watchpage />
    },
  ],
},
]);

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        {/* <Body/> */}

        <RouterProvider router={appRouter} />
        {/* body will reander over here */}
        {/**
     * 
     * head
     * body
     * sidebar
     * maincontainer
     * vidioConatiner
     * Vidocard
     */

        }
      </div>
    </Provider>
  );
}

export default App;
