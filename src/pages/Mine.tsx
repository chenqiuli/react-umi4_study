import withRouter from '@/components/withRouter';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'umi';

type MaoyanList = {
  nm: string;
  id: React.Key;
};

function Mine(props: any) {
  console.log(props, 'props');
  const [maoyanList, setmaoyanList] = useState<Array<MaoyanList>>([]);

  useEffect(() => {
    axios('/users').then((res) => {
      console.log(res.data);
    });
  }, []);

  useEffect(() => {
    axios(
      '/api/mmdb/movie/v3/list/hot.json?ct=%E5%B9%BF%E5%B7%9E&ci=20&channelId=4'
    ).then((res) => {
      // console.log(res.data.data.hot);
      setmaoyanList(res.data.data.hot);
    });
  }, []);

  // 路由拦截方式一：用于hooks组件
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
    }
  }, []);

  return (
    <div>
      Mine
      <ul>
        <div style={{ color: 'red' }}>猫眼电影如下：</div>
        {maoyanList.map((item) => (
          <li>{item.nm}</li>
        ))}
      </ul>
    </div>
  );
}

// 路由拦截方式二：用于class组件
// export default withRouter(Mine);
export default Mine;
