import React from 'react';
import MemberDetailBenjaminComponent from './MemberDetailBenjaminComponent';
import MemberDetailChrisComponent from './MemberDetailChrisComponent';
import MemberDetailDannyComponent from './MemberDetailDannyComponent';
import MemberDetailJoshComponent from './MemberDetailJoshComponent';

const MemberDetailComponent = (props) => {
  const { memberId } = props;

  switch (memberId) {
    case 1:
      return <MemberDetailBenjaminComponent />;
    case 2:
      return <MemberDetailChrisComponent />;
    case 3:
      return <MemberDetailDannyComponent />;
    case 4:
      return <MemberDetailJoshComponent />;

    default:
      return <div>Benjamin</div>;
  }
};

export default MemberDetailComponent;
