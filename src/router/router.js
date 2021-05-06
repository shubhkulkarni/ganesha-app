import React, { Suspense, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import { appRouter, authRouter } from "./router.config";

import ResponsiveDrawer from "./../components/Drawer/Drawer";
import { useGlobal } from "./../global/global";
import { checkAuthStatus } from "../utils/auth";
import Loader from "../components/Loader/Loader";
function Router() {
  const [state, actions] = useGlobal();
  //   return (
  //     <ResponsiveDrawer>
  //     <Suspense fallback={<div>Loading...</div>}>
  //       <Switch>
  //         {appRouter.map((route) => {
  //           return <Route path={route.path} component={route.component} exact />;
  //         })}
  //         <Redirect from="/" to="/donate" />
  //       </Switch>
  //     </Suspense>
  //     </ResponsiveDrawer>
  //   );
  // }
  useEffect(() => {
    let authStatus = checkAuthStatus();
    actions.setAuth(authStatus);
  }, []);

  if (state.auth) {
    return (
      <ResponsiveDrawer>
        <Suspense fallback={<Loader />}>
          <Switch>
            {appRouter.map((route) => {
              return (
                <Route
                  key={route.path}
                  path={route.path}
                  component={route.component}
                />
              );
            })}
            <Redirect from="/" to="/donate" />
            <Route render={() => <div>Page not found :(</div>} />
          </Switch>
        </Suspense>
      </ResponsiveDrawer>
    );
  } else {
    return (
      <Suspense fallback={<Loader />}>
        <Switch>
          {authRouter.map((route) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                component={route.component}
              />
            );
          })}

          <Redirect from="/" to="/login" />
          <Route render={() => <div>Page not found :(</div>} />
        </Switch>
      </Suspense>
    );
  }
}
export default Router;
