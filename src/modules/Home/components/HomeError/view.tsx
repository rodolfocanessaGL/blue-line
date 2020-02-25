import React, { memo, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ErrorAlert } from 'components';
import { AppState } from 'types';

const getMessage = (ne: string | null, se: string | null): string => {
  if (ne) {
    return '';
  } else if (se) {
    return se;
  }

  return '';
};

const HomeError = memo(() => {
  const newsError = useSelector<AppState, string | null>(state => state.news.error);
  const sourcesError = useSelector<AppState, string | null>(state => state.source.error);
  const [ show, setShow ] = useState(false);
  const onClose = () => setShow(false);
  const message = getMessage(newsError, sourcesError);

  useEffect(() => {
    if (message) {
      setShow(true);
    }
  }, [newsError, sourcesError, message]);

  return (
    <ErrorAlert
      show={show}
      heading="Oh snap! You got an error!"
      message={message}
      onClose={onClose}
    />
  );
});

export default HomeError;
