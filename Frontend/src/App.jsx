import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Home, AboutUs, Menu, ContactUs, Login, SignUp, ProceedToPay, NotFound } from "./pages/index";
import { Header, Footer, ScrollToTop } from "./components";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store/store";
import { ToastContainer } from "react-toastify";


function AppContent() {
  const location = useLocation();
  const isLoginOrSignUpPage =
    location.pathname === "/login" ||
    location.pathname === "/sign-up" ||
    location.pathname === "/admin/login"
    ;

  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />
      <ToastContainer />
      {!isLoginOrSignUpPage && <Header />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/pay" element={<ProceedToPay />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {!isLoginOrSignUpPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <AppContent />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
