import React, { FunctionComponent, memo } from 'react';

import { useBreakpoint } from '../../hooks';
import { Devices } from '../../utils';
import { EllipsisProps } from './types';

const formatStr = (chars: number, str: string): string => {
  if (!chars) {
    return str;
  }

  return `${str.substr(0, chars)}...`;
};

const Ellipsis: FunctionComponent<EllipsisProps> = ({
  children,
  lg = 0,
  md = 0,
  sm = 0,
  xs = 0
}) => {
  const brkPnt = useBreakpoint();
  let chars = 0;

  switch (brkPnt) {
    case Devices.MD: {
      chars = md === 0 ? lg : md;

      break;
    }

    case Devices.SM: {
      chars = sm === 0 ? md : sm;

      break;
    }

    case Devices.XS: {
      chars = xs === 0 ? sm : xs;

      break;
    }

    default: {
      chars = lg;
    }
  }

  return <>{formatStr(chars, children)}</>;
};

export default memo(Ellipsis);
