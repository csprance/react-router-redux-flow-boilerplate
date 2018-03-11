// @flow
/** exampleFeature React-Redux Container Component
 * author: Chris Sprance - csprance
 * description: The main ReactRedux Container
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';

type Props = {};
type State = {};

class ExampleFeatureContainer extends Component<Props, State> {
	render() {
		return <div> exampleFeature </div>;
	}
}

export default connect(store => ({
	example: store.example
}))(ExampleFeatureContainer);
