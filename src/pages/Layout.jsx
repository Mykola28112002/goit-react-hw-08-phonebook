

import { Link, Header,Div,Button } from "./Layout.styled";
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';


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
                <Avatar sx={{ bgcolor: 'blue' }} src="/broken-image.jpg" />
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