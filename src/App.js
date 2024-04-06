import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import {
  Home,
  Explore,
  Friends,
  Saved,
  CreatePost,
  ProfileDetails,
  ProfileEdit,
  PostDetails,
  PostEdit,
  NotFound,
} from "./_root/index";
import SignInForm from "./_auth/forms/SignInForm";
import SignUpForm from "./_auth/forms/SignUpForm";
import Users from "./_admin/pages/Users";

import RootLayout from "./_root/RootLayout";
import AuthLayout from "./_auth/AuthLayout";
import AdminLayout from "./_admin/AdminLayout";

import ProtectedRouted from "./utils/ProtectedRoute";

function App() {
  return (
    <main>
      <Router>
        <Routes>
          {/* Root Layout */}
          <Route element={<RootLayout />}>
            <Route
              path="/"
              element={
                <ProtectedRouted>
                  <Home />
                </ProtectedRouted>
              }
            />
            <Route
              path="/home"
              element={
                <ProtectedRouted>
                  <Home />
                </ProtectedRouted>
              }
            />
            <Route
              path="/explore"
              element={
                <ProtectedRouted>
                  <Explore />
                </ProtectedRouted>
              }
            />
            <Route
              path="/friends"
              element={
                <ProtectedRouted>
                  <Friends />
                </ProtectedRouted>
              }
            />
            <Route
              path="/saved"
              element={
                <ProtectedRouted>
                  <Saved />
                </ProtectedRouted>
              }
            />
            <Route
              path="/create-post"
              element={
                <ProtectedRouted>
                  <CreatePost />
                </ProtectedRouted>
              }
            />
            <Route
              path="/profile-details/:id"
              element={
                <ProtectedRouted>
                  <ProfileDetails />
                </ProtectedRouted>
              }
            />
            <Route
              path="/profile-edit/:id"
              element={
                <ProtectedRouted>
                  <ProfileEdit />
                </ProtectedRouted>
              }
            />
            <Route
              path="/post-details/:id"
              element={
                <ProtectedRouted>
                  <PostDetails />
                </ProtectedRouted>
              }
            />
            <Route
              path="/post-edit/:id"
              element={
                <ProtectedRouted>
                  <PostEdit />
                </ProtectedRouted>
              }
            />
          </Route>

          {/* Authentication Layout */}
          <Route element={<AuthLayout />}>
            <Route path="/sign-in" element={<SignInForm />} />
            <Route path="/sign-up" element={<SignUpForm />} />
          </Route>

          <Route element={<AdminLayout />}>
            <Route
              path="/admin/users"
              element={
                <ProtectedRouted>
                  <Users />
                </ProtectedRouted>
              }
            />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
