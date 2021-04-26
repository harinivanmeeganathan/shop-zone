import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../../components/preview-collection/collection-preview';
import {selectCollectionsForPreview} from '../../redux/shop/shop.selectors';

import {CollectionOverviewContainer} from './collections-overview.styles';

const CollectionOverview = ({collections}) => (
    <CollectionOverviewContainer>
        {collections.map(({ id, ...otherCollectionProps }) => (
            <CollectionPreview key={id} {...otherCollectionProps} />
          ))}
    </CollectionOverviewContainer>

);


const mapStateToProps = createStructuredSelector(
    {    collections: selectCollectionsForPreview
    });


export default connect(mapStateToProps)(CollectionOverview);