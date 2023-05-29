import React from 'react';
import { history, useLocation } from 'umi';

export default function Auth(props: any) {
  if (!localStorage.getItem('token')) {
    history.push('/login');
  }
  return <div>{props.children}</div>;
}
