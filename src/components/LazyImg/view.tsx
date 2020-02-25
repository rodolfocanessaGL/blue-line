import React, {
  FunctionComponent,
  useRef,
  useEffect,
  useState
} from 'react';
import classnames from 'classnames';

import loadingSrc from './loading.svg';
import { LazyImgProps } from './types';

const isAble = (): boolean => (
  'IntersectionObserver' in window &&
  'IntersectionObserverEntry' &&
  'intersectionRatio' in window.IntersectionObserverEntry.prototype
);

const LazyImg: FunctionComponent<LazyImgProps> = ({
  src,
  className = '',
  ...props
}) => {
  const imgRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(loadingSrc);

  useEffect(() => {
    const imgEl: any = imgRef.current;

    if (isAble() && imgEl) {
      const lazyImgObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setImgSrc(src);
            lazyImgObserver.unobserve(imgEl);
          }
        });
      });

      lazyImgObserver.observe(imgEl);

      return () => lazyImgObserver.unobserve(imgEl); 
    }

    setImgSrc(src);
  }, [src]);

  return (
    <img
      src={imgSrc}
      className={classnames(className, {
        loading: loadingSrc === imgSrc
      })}
      ref={imgRef}
      alt="img"
      {...props}
    />
  );
};

export default LazyImg;
