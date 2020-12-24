import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

// import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
// import CollectionPageContainer from '../collection/collection.container';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

import Spinner from '../../components/spinner/spinner.component';

const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview.container'));
const CollectionPageContainer = lazy(() => import('../collection/collection.container'));

const ShopPage = ({ fetchCollectionsStart, match }) => {
    useEffect(() => {
        fetchCollectionsStart();
        // fetchCollectionsStart will not change, since getting it from mapDispatchToProps
    }, [fetchCollectionsStart]);

    return (
        <div className="shop-page">
            <Suspense fallback={<Spinner />}>
                <Route 
                    exact 
                    path={`${match.path}`} 
                    component={CollectionsOverviewContainer}
                    // render={(props) => (
                    //     <CollectionsOverviewWithSpinner 
                    //         isLoading={isFetchingCollections} 
                    //         {...props} 
                    //     />
                    // )} 
                />
                <Route 
                    path={`${match.path}/:collectionId`} 
                    component={CollectionPageContainer}
                    // render={(props) => (
                    //     <CollectionPageWithSpinner 
                    //         isLoading={!isCollectionsLoaded} 
                    //         {...props} 
                    //     />
                    // )} 
                />
            </Suspense>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(
    null, 
    mapDispatchToProps
)(ShopPage);