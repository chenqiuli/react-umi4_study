import { useEffect } from 'react';
import { history } from 'umi';

export default function HomePage() {
  useEffect(() => {
    // 重定向到Films页面
    history.push('/films');
  }, []);

  return <div></div>;
}
