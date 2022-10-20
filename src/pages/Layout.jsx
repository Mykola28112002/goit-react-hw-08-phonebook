

import { Link, Header,Div,Button } from "./Layout.styled";
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';

 const Layout = () => {
    const { isLoggedIn } = useAuth();
    const dispatch = useDispatch();
    const { user } = useAuth();
    return <>
     <Header>
      <div>
          <Link to="/" end>Main</Link>
          {isLoggedIn && <Link to="/contacts">Contacts</Link>}
      </div>
        {!isLoggedIn && <div>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
       </div>}
            {isLoggedIn && <Div>
                <p>{user.email}</p>
                <Button type="button" onClick={() => dispatch(logOut())}>Logout</Button>
            </Div>}
  </Header>
    <Suspense fallback={<div>Loading page...</div>}>
      <Outlet />
    </Suspense>
    </>
}

export default Layout;