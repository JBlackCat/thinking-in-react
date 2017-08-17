import React from 'react';

export default class ProductRow extends React.Component {
	render() {
		const isStocked = this.props.product.stocked ? {} : {color: 'red'};

		return (
			<tr style={isStocked}>
				<td>{this.props.product.name}</td>
				<td>{this.props.product.price}</td>
			</tr>
		);
	}
};
