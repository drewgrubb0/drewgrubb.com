import React, { FC } from 'react';
import Email from './email';
import Facebook from './facebook';
import Github from './github';
import LinkedIn from './linkedin';
import Resume from './resume';
import UnknownIcon from './unknown';

export interface IconLoaderProps {
  name: string;
}

const IconBuilder: FC<IconLoaderProps> = (props: IconLoaderProps) => {
  switch (props.name) {
    case 'Resume':
      return <Resume />;
    case 'Email':
      return <Email />;
    case 'Github':
      return <Github />;
    case 'Facebook':
      return <Facebook />;
    case 'LinkedIn':
      return <LinkedIn />;
    default:
      return <UnknownIcon />;
  }
};

export default IconBuilder;
