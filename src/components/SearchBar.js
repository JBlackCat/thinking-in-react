import React from 'react';

export default class SearchBar extends React.Component {
	render() {
		return (
			<form action="">
				<input type="text" placeholder="Search..." />
				<input id="inStock" type="checkbox" />
				<label htmlFor="inStock">Only show products in stock</label>
			</form>
		);
	}
};
