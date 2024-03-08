import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home, Explore, Friends, Saved, CreatePost, ProfileDetails, ProfileEdit, PostDetails, PostEdit } from "./_root/index";
import SignInForm from "./_auth/forms/SignInForm";
import SignUpForm from "./_auth/forms/SignUpForm";
import Users from "./_admin/pages/Users";
import Posts from "./_admin/pages/Posts";

import RootLayout from "./_root/RootLayout";
import AuthLayout from "./_auth/AuthLayout";
import AdminLayout from "./_admin/AdminLayout";

function App() {
  return (
    <main>
      <Router>
        <Routes>
          {/* Root Layout */}
          <Route element={<RootLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/profile-details/:id" element={<ProfileDetails />} />
            <Route path="/profile-edit/:id" element={<ProfileEdit />} />
            <Route path="/post-details/:id" element={<PostDetails />} />
            <Route path="/post-edit/:id" element={<PostEdit />} />
          </Route>

          {/* Authentication Layout */}
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignInForm />} />
            <Route path="/sign-up" element={<SignUpForm />} />
          </Route>

          <Route element={<AdminLayout/>}>
            <Route path="/admin/users" element={<Users />}/>
            <Route path="/admin/posts" element={<Posts />}/>
          </Route>
        </Routes>
      </Router>
    </main>
  );
}

export default App;
