import React from 'react';

import Spinner from '../spinner/spinner.component';

// Higher order component
// Takes component as an argument, and returns another component
const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
    return isLoading ? (
        <Spinner />
    ) : (
        <WrappedComponent {...otherProps} />
    );
};

export default WithSpinner;