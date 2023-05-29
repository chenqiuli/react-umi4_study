import React from 'react';
import { NavBar } from 'antd-mobile';
import { history } from 'umi'; // useModel

import { SearchOutline } from 'antd-mobile-icons';

function Cinemas() {
  // const store = useModel('useCityModel');
  // console.log(store);
  return (
    <div>
      <NavBar
        back="北京"
        onBack={() => {
          history.push('/city');
        }}
        backArrow={false}
        right={<SearchOutline />}
      >
        标题
      </NavBar>
    </div>
  );
}

// const mapStateToProps = (allModels: any) => ({
//   a: 1,
// });

export default Cinemas;
// export default connect(mapStateToProps)(Cinemas);
