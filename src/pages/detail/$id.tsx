import React from 'react';
import { useParams } from 'umi';

export default function Detail() {
  const params = useParams();
  // console.log(params);

  return <div>Detail-{params.id}</div>;
}
