import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { selectUser } from '../../redux/auth/selectors';
import c from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <h3 className={c.title}>Welcome, {user.name}</h3>
      <button className={c.logoutBtn} type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </div>
  );
};