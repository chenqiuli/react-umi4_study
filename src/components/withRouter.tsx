import React from 'react';
import { Navigate } from 'umi';

// 封装一个高阶组件做路由拦截
export default function withRouter(Componnet: any) {
  return function (props: any) {
    return localStorage.getItem('token') ? (
      <Componnet a="1" {...props} />
    ) : (
      <Navigate to="/login" />
    );
  };
}
