import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionFetching } from '../../../Redux/selectors/local.database.selector'
import WithSpinner from '../../Spinner/Spinner.component'
import ShopCollections from './Shop-collections'


const mapStateToProps = createStructuredSelector({
 isLoading: selectIsCollectionFetching
})

const ShopCollectionsContainer = connect(mapStateToProps)(WithSpinner(ShopCollections))
export default ShopCollectionsContainer