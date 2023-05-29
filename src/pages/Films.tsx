import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'umi';

export default function Films() {
  // 重定向到NowPlaying页面
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.pathname === '/films') {
      navigate('/films/nowplaying');
    }
  }, []);

  return (
    <div>
      <div style={{ height: '200px' }}>大轮播</div>
      {/* 嵌套路由 */}
      <Outlet />
    </div>
  );
}
