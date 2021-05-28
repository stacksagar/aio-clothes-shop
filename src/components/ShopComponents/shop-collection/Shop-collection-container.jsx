import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectIsCollectionIsLoaded } from '../../../Redux/selectors/local.database.selector' 
import WithSpinner from '../../Spinner/Spinner.component'
import ShopCollection from './Shop-collection'

const mapStateToProps = createStructuredSelector({
 isLoading: state => !selectIsCollectionIsLoaded(state)
})

const ShopCollectionContainer = connect(mapStateToProps)(WithSpinner(ShopCollection))
export default ShopCollectionContainer