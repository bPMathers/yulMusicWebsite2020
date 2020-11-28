import React from 'react';
import MemberDetailBenjaminComponent from './MemberDetailBenjaminComponent';
import MemberDetailChrisComponent from './MemberDetailChrisComponent';
import MemberDetailDannyComponent from './MemberDetailDannyComponent';
import MemberDetailJoshComponent from './MemberDetailJoshComponent';

const MemberDetailComponent = (props) => {
  const { memberId } = props;

  switch (memberId) {
    case 1:
      return <MemberDetailChrisComponent />;
    case 2:
      return <MemberDetailBenjaminComponent />;
    case 3:
      return <MemberDetailDannyComponent />;
    case 4:
      return <MemberDetailJoshComponent />;

    default:
      return <div>Error</div>;
  }
};

export default MemberDetailComponent;
