import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import { firestore } from '../../firebase/firebase.utils';

import {
  CollectionPageContainer,
  CollectionTitle,
  CollectionItemsContainer
} from './collection.styles';

const CollectionPage = ({ collection }) => {
    // Not using, but good example
    // useEffect(() => {
    //     console.log('I am subscribing');
    //     const unsubscribeFromCollections = firestore
    //         .collection('collections')
    //         .onSnapshot(snapshot => console.log(snapshot));

    //     // Replicates componentWillUnmount()
    //     // Navigate away from the collection page
    //     return () => {
    //         console.log('I am unsubscribing');
    //         unsubscribeFromCollections();
    //     };
    // }, []); // Empty array means that we only want to use this effect when it mounts

    const { title, items } = collection;
    return (
        <CollectionPageContainer>
            <CollectionTitle>{title}</CollectionTitle>
            <CollectionItemsContainer>
                {items.map(item => (
                    <CollectionItem key={item.id} item={item} />
                ))}
            </CollectionItemsContainer>
        </CollectionPageContainer>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);