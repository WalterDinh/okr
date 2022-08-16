import React, { Fragment, Suspense } from 'react';
import PrivateRoute from 'components/PrivateRoute';
import Footer from 'components/Footer';
import Header from 'components/Header';
import routes from 'routes/routes';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Sidebar from 'components/Sidebar';
import CommonStyles from 'components/CommonStyles';

const DefaultLayout = (props) => {
  return (
    <Fragment>
      <Sidebar />
      <main className="main-container">
        <Header />
        <CommonStyles.Container>
          <Suspense fallback={<CommonStyles.Loading />}>
            <Switch>
              {routes.map((route, idx) => {
                if (route.isPrivate) {
                  return <PrivateRoute key={idx} path={route.path} exact={route.exact} component={route.component} />;
                }

                return <Route key={idx} path={route.path} exact={route.exact} component={route.component} />;
              })}
            </Switch>
          </Suspense>
        </CommonStyles.Container>
      </main>
      <Footer />
    </Fragment>
  );
};

export default DefaultLayout;
