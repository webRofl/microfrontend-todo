import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const CoreButton = React.lazy(async () => await import('core/Button'));

const Todo = () => {
  return (
    <>
      <span>Todo</span>

      <ErrorBoundary fallback={<p>Something went wrong . . .</p>}>
        <Suspense fallback={'loading...'}>
          <CoreButton>Hello, world!</CoreButton>
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Todo;
