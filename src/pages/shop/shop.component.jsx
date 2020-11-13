import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';

class ShopPage extends React.Component {
    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        // Never put in the constructor, whenever dispatch occurs it triggers any connected component to re-render because it calls setState()
        // All API requests should be in componentDidMount()
        fetchCollectionsStartAsync(); 
    }

    render() {
        const { match } = this.props;
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
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(
    null, 
    mapDispatchToProps
)(ShopPage);