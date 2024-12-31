import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Home, AboutUs, Menu, ContactUs, Login, SignUp, ForgetPassword } from './pages/index';
import { Header, Footer } from './components';
import { Provider } from 'react-redux';
import store from './store/store';

function AppContent() {
  const location = useLocation();
  const isLoginOrSignUpPage = location.pathname === '/login' || location.pathname === '/sign-up' || location.pathname === '/forget-password';

  return (
    <div className="flex flex-col min-h-screen">
      {!isLoginOrSignUpPage && <Header />}
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forget-password" element={<ForgetPassword />} />
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
        <AppContent />
      </BrowserRouter>
    </Provider >
  );
}

export default App;
