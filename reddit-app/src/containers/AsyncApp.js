import { connect } from 'react-redux'
import {
  selectSubreddit,
  fetchPostsIfNeeded,
  invalidateSubreddit
} from '../actions'

function mapStateToProps(state) {
    const { selectedSubreddit, postsBySubreddit } = state
    const { isFetching, lastUpdated, items: posts } = postsBySubreddit[
        selectedSubreddit
    ] || {
        isFetching: true,
        items: []
    }

    return {
        selectedSubreddit,
        posts,
        isFetching,
        lastUpdated
    }
}
  
export default connect(
    mapStateToProps,
    {
        electSubreddit,
        etchPostsIfNeeded,
        nvalidateSubreddit
    }
)(App)