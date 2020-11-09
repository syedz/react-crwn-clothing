import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './with-spinner.styles';

// Higher order component
// Takes component as an argument, and returns another component
const WithSpinner = WrappedComponent => {
    const Spinner = ({ isLoading, ...otherProps }) => {
        return isLoading ? (
            <SpinnerOverlay>
                <SpinnerContainer />
            </SpinnerOverlay>
        ) : (
            <WrappedComponent {...otherProps} />
        );
    }
    return Spinner;
};

export default WithSpinner;