import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MainPage } from "./views/MainPage";
import { ContactUs } from "./views/ContactUs";
import { Layout } from "./views/Layout";
import { Country } from "./views/Country";
import { WildCard } from "./views/WildCard";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Layout */}
          <Route path="/" element={<Layout />}>
            {/* index route */}
            <Route path="*" element={<WildCard />} />

            {/* regular route */}
            <Route path="contact" element={<ContactUs />} />
            {/* parametrized} */}
            <Route path=":country" element={<Country />} />
            <Route index element={<MainPage />} />
            {/* wildcard} */}
            {/* <Route path="*" element={<WildCard />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
