import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Counter from "./Components/Counter";
import Home from "./Components/Home";
function Router() {
  const routes = createBrowserRouter([
    {
        path: "/counter",
        element: <Counter />,
      },
    {
      path: "/",
      element: <Home />,
    },
    // {
    //   path: "/compass",
    //   element: <Compass />,
    // },
    // {
    //   path: "/speedtest",
    //   element: <SpeedTest />,
    // },
    // {
    //   path: "/news",
    //   element: <NewsApi />,
    // },
    // {
    //   path: "/qrcode",
    //   element: <QrcodeGenerator />,
    // },
    // {
    //   path: "/tempmail",
    //   element: <Tempmail />,
    // },
  ]);
  return (
    <div>
      <RouterProvider  router={routes} />
    </div>
  );
}

export default Router;
