import React from 'react';

const SocialIconComponent = (props) => {
  return (
    <div style={{ width: props.width ?? 28, padding: props.padding ?? 5 }}>
      {props.children}
    </div>
  );
};

export default SocialIconComponent;
