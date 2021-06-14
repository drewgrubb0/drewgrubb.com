import React, { FC } from 'react';
import {
  Resume,
  Email,
  Github,
  Facebook,
  LinkedIn,
  UnknownIcon,
} from '@components/shared/icons';

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
