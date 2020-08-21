import React from 'react';
import { Card } from 'antd';

import './RecommandProfile.css';

const RecommandProfile = ({ data }) => {
  console.log(data);
  return (
    <Card className="recommand-profile" cover={<img src={data.image} alt="profile img" />}>
      <Card.Meta title={data.name} description={`${data.tags}개의 태그가 겹칩니다`} />
    </Card>
  );
};

export default RecommandProfile;
