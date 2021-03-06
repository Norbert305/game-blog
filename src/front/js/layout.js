import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Home } from "./pages/home";
import { Demo } from "./pages/demo";
import { Single } from "./pages/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

import { SignUpPage } from "./pages/SignUpPage";
import { Login } from "./pages/Login";
import { ClientHomePage } from "./pages/ClientHomePage";
import { ClientProfilePage } from "./pages/ClientProfilePage";
import { ArticlePage } from "./pages/ArticlePage";
import { BlogPage } from "./pages/BlogPage";
import { BlogPosted } from "./pages/BlogPosted";
import { UserNavBar } from "./component/UserNavBar";
import { EditProfile } from "./pages/EditProfile";

//create your first component
const Layout = () => {
  //the basename is used when your project is published in a subdirectory and not in the root of the domain
  // you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/UserNavBar">
              <UserNavBar />
            </Route>
            <Route exact path="/SignUpPage">
              <SignUpPage />
            </Route>
            <Route exact path="/Login">
              <Login />
            </Route>
            <Route exact path="/ClientHomePage">
              <UserNavBar />
              <ClientHomePage />
            </Route>
            <Route exact path="/ClientProfilePage">
              <UserNavBar />
              <ClientProfilePage />
            </Route>
            <Route exact path="/EditProfile">
              <UserNavBar />
              <EditProfile />
            </Route>
            <Route exact path="/ArticlePage">
              <UserNavBar />
              <ArticlePage />
            </Route>
            <Route exact path="/BlogPage">
              <UserNavBar />
              <BlogPage />
            </Route>
            <Route exact path="/BlogPosted">
              <UserNavBar />
              <BlogPosted />
            </Route>
            <Route exact path="/demo">
              <Demo />
            </Route>
            <Route exact path="/single/:theid">
              <Single />
            </Route>
            <Route>
              <h1>Not found!</h1>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
