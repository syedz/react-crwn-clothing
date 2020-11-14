import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const ShopPage = ({ fetchCollectionsStart, match }) => {
    useEffect(() => {
        fetchCollectionsStart();
        // fetchCollectionsStart will not change, since getting it from mapDispatchToProps
    }, [fetchCollectionsStart]);

    return (
        <div className="shop-page">
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