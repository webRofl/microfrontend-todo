import React, { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
const Todo = React.lazy(async () => await import('todo/Todo'));

const Test = () => {
  return (
    <>
      <span>test</span>
      <ErrorBoundary fallback={<p>Something went wrong . . .</p>}>
        <Suspense fallback={'...loading'}>
          <Todo />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default Test;
