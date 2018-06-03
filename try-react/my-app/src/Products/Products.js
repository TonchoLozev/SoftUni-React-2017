import React from 'react';

/* <ProductTable products={this.props.products}/> */
class FilterableProductTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {filterText: '', isStockOnly: false};
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleStockChange = this.handleStockChange.bind(this);
    }

    handleFilterTextChange(filterText) {
        this.setState({filterText: filterText})
    }

    handleStockChange(isStockOnly) {
        console.log(isStockOnly)
        this.setState({isStockOnly: isStockOnly})
    }

    render() {
        return (
            <div>
                <SearchBar
                    filterText={this.state.filterText}
                    isStockOnly={this.state.isStockOnly}
                    handleFilterTextChange={this.handleFilterTextChange}
                    handleStockChange={this.handleStockChange}
                />
                <ProductTable
                    products={this.props.products}
                    filterText={this.state.filterText}
                    isStockOnly={this.state.isStockOnly}/>
            </div>
        )
    }
}

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleChangeInput = this.handleChangeInput.bind(this);
        this.handleCheckBox = this.handleCheckBox.bind(this);
    }

    handleChangeInput(event) {
        this.props.handleFilterTextChange(event.target.value);
    }

    handleCheckBox(event) {
        this.props.handleStockChange(event.target.checked);
    }

    render() {
        return (
            <form>
                <input
                    type="text"
                    placeholder="Search..."
                    value={this.props.filterText}
                    onChange={this.handleChangeInput}
                />
                <p>
                    <input
                        type="checkbox"
                        value={this.props.isStockOnly}
                        onChange={this.handleCheckBox}/>
                    {' '}
                    Only products in stock
                </p>
            </form>
        )
    }
}

class ProductTable extends React.Component {
    render() {
        const filterText = this.props.filterText;
        const isStockOnly = this.props.isStockOnly;
        const rows = [];
        let lastCategory = null;

        this.props.products.forEach((product) => {
            if(product.name.indexOf(filterText) === -1){
                return;
            }
            if(isStockOnly && !product.stocked){
                return;
            }
            if (product.category !== lastCategory) {
                rows.push(<ProductCategory category={product.category} key={product.category}/>)
            }
            rows.push(<ProductRow product={product} key={product.name}/>);
            lastCategory = product.category;
        });

        return (
            <table>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                </thead>
                <tbody>
                {rows}
                </tbody>
            </table>
        )
    }
}

class ProductRow extends React.Component {
    render() {
        const product = this.props.product;
        const name = product.stocked ? product.name : <span style={{color: "red"}}>{product.name}</span>;

        return (
            <tr>
                <td>{name}</td>
                <td>{product.price}</td>
            </tr>
        )
    }
}

class ProductCategory extends React.Component {
    render() {
        const category = this.props.category;
        return (
            <tr>
                <th colSpan="2">{category}</th>
            </tr>
        )
    }
}

export default FilterableProductTable;