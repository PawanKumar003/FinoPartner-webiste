import "./App.css";
import { Routes, Route } from "react-router-dom";
import Fb from "./pages/Fb";
import Email from "./pages/email";
import Google from "./pages/google";
import Mobile from "./pages/Mobile";
import GoogleAds from "./pages/GoogleAds";

function App() {
  return (
    <>
      <Routes>
        <Route path="rt/fb" element={<Fb sourceId="2" />} />
        <Route path="rt/g" element={<Google sourceId="3" />} />
        <Route path="rt/email" element={<Email sourceId="7" />} />

        <Route path="rt/facebook" element={<Mobile sourceId="2" />} />
        <Route path="rt/googleads" element={<GoogleAds sourceId="3" />} />
        {/* <Route path="rt/*" element={<div>Loading or Redirecting...</div>} /> */}
        {/* <Route
          path="*"
          element={
            <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
              <div className="text-center">
                <p className="text-base font-semibold text-indigo-600">404</p>
                <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                  Page not found
                </h1>
                <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                  Sorry, we couldn’t find the page you’re looking for.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                  <a
                    href="https://thefinopartners.com/"
                    className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Go back home
                  </a>
                </div>
              </div>
            </main>
          }
        /> */}
      </Routes>

      {/* <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://thefinopartners.com/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
           
          </div>
        </div>
      </main> */}
    </>
  );
}

export default App;
