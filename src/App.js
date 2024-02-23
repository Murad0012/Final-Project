import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, Explore, Friends, Saved, CreatePost } from "./_root/index";
import SignInForm from "./_auth/forms/SignInForm";
import SignUpForm from "./_auth/forms/SignUpForm";

import RootLayout from "./_root/RootLayout";
import AuthLayout from "./_auth/AuthLayout";

function App() {
  return (
    <main>
      <Router>
        <Routes>
          {/* Root Layout */}
          <Route element={<RootLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/create-post" element={<CreatePost />} />
          </Route>

          {/* Authentication Layout */}
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignInForm />} />
            <Route path="/sign-up" element={<SignUpForm />} />
          </Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
