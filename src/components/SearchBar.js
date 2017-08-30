import React from 'react';

export default class SearchBar extends React.Component {
	constructor(props) {
		super(props);

		this.handleFilterTextInputChange = this.handleFilterTextInputChange.bind(this);
		this.handleInStockInputChange = this.handleInStockInputChange.bind(this);
	}

	handleFilterTextInputChange(evt) {
		this.props.onFilterTextInput(evt.target.value);
	}

	handleInStockInputChange(evt) {
		this.props.onInStockInput(evt.target.checked);
	}

	render() {
		return (
			<form action="">
				<input
					type="text"
					placeholder="Search..."
					value={this.props.filterText}
					onChange={this.handleFilterTextInputChange}
				/>
				<input
					id="inStock"
					type="checkbox"
					checked={this.props.inStockOnly}
					onChange={this.handleInStockInputChange}
				/>
				<label htmlFor="inStock">Only show products in stock</label>
			</form>
		);
	}
};
