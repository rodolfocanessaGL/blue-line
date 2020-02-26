import { useState, useEffect } from 'react';
import { fromEvent, interval } from 'rxjs';
import { throttle } from 'rxjs/operators';

import { getDevice, Devices } from '../utils';

const useBreakpoint = (): Devices => {
  const [brkPnt, setBrkPnt] = useState(() => getDevice(window.innerWidth));

  useEffect(() => {
    const resize = fromEvent(window, 'resize');
    const subscription = resize
      .pipe(throttle(() => interval(200)))
      .subscribe(() => {
        setBrkPnt(getDevice(window.innerWidth));
      });

    return (): void => subscription.unsubscribe();
  }, []);

  return brkPnt;
};

export default useBreakpoint;
