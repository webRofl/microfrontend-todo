import React, { type FC, type PropsWithChildren, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

interface Props {
  errorBoundaryFallback?: React.ReactElement;
  suspenseFallback?: string;
}

const SharedComponentHandler: FC<PropsWithChildren<Props>> = ({
  children,
  errorBoundaryFallback,
  suspenseFallback,
}) => {
  return (
    <ErrorBoundary fallback={errorBoundaryFallback ?? <p>loading . . .</p>}>
      <Suspense fallback={suspenseFallback ?? 'loading'}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default SharedComponentHandler;
