import { Fade } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import benj from '../../assets/Team/MemberChoiceItemPhotos/Benjamin-Proulx-Mathers-7b.jpg';
import chris from '../../assets/Team/MemberChoiceItemPhotos/Christian-Lagueux-7b.jpg';
import danny from '../../assets/Team/MemberChoiceItemPhotos/Danny-Black-Background4.jpg';
import josh from '../../assets/Team/MemberChoiceItemPhotos/Josh9-578x867.jpg';

const MemberPhotosComponent = (props) => {
  const { memberId } = props;
  const [memberPhoto, setMemberPhoto] = useState(undefined);

  useEffect(() => {
    switch (memberId) {
      case 1:
        setMemberPhoto(chris);
        break;
      case 2:
        setMemberPhoto(benj);
        break;
      case 3:
        setMemberPhoto(danny);
        break;
      case 4:
        setMemberPhoto(josh);
        break;

      default:
        break;
    }
  }, [memberId]);

  return (
    <Fade in={true} timeout={2000}>
      <div
        style={{
          backgroundImage: `url(${memberPhoto})`,
          backgroundSize: 'cover',
          height: '100%',
          width: '100%',
        }}
      ></div>
    </Fade>
  );
};

export default MemberPhotosComponent;
