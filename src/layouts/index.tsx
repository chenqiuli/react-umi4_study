import { NavLink, Outlet, history } from 'umi';
import styles from './index.less';

export default function Layout() {
  if (location.pathname === '/city' || location.pathname.includes('detail')) {
    return <Outlet />;
  }

  return (
    <div className={styles.navs}>
      {/* 嵌套路由，做插槽 */}
      <Outlet />
      <ul className={styles.tabbar}>
        {['films', 'cinemas', 'mine'].map((item, index) => {
          return (
            <li key={index}>
              <NavLink
                to={`/${item}`}
                className={({ isActive }) =>
                  isActive ? styles.active : undefined
                }
              >
                {item}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
