import * as React from 'react'

const input = [
    { category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football" },
    { category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball" },
    { category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball" },
    { category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch" },
    { category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5" },
    { category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7" }
]

interface SearchBarProp {
    filterText: string
    inStockOnly: boolean
    onFilterTextInput(text: string): void
    onInStockInput(text: boolean): void
}
class SearchBar extends React.Component<SearchBarProp, {}>{
    handleFilterTextInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        this.props.onFilterTextInput(event.target.value)
    }

    handleInStockInputChange: React.ChangeEventHandler<HTMLInputElement> = event => {
        this.props.onInStockInput(event.target.checked)
    }

    render() {
        return (
            <form>
                <input placeholder='Search…' onChange={this.handleFilterTextInputChange} />
                <br />
                <label>
                    <input type="checkbox" onChange={this.handleInStockInputChange} />
                    Only show products in stock
            </label>
            </form>
        )
    }
}

function ProductCategoryRow(props: { category: string }) {
    return (
        <tr>
            <td colSpan={2}>{props.category}</td>
        </tr>
    )
}

function ProductRow(props: { name: string, stocked: boolean, price: string }) {
    return (
        <tr>
            <td>
                {
                    props.stocked ?
                        <span>{props.name}</span>
                        :
                        <span style={{ color: 'red' }}>{props.name}</span>
                }
            </td>
            <td>{props.price}</td>
        </tr>
    )
}

interface ProductTableProp {
    filterText: string
    inStockOnly: boolean
    products: typeof input
}

class ProductTable extends React.Component<ProductTableProp, {}> {
    render() {
        const rows = this.props.products
            .filter(product => !this.props.inStockOnly || product.stocked)
            .filter(product => product.name.indexOf(this.props.filterText) != -1)
            .reduce((result, product) => {
                if (result[product.category] === undefined) {
                    result[product.category] = []
                }
                result[product.category].push({
                    name: product.name,
                    stocked: product.stocked,
                    price: product.price
                })
                return result
            }, {} as { [key: string]: { name: string, stocked: boolean, price: string }[] })

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.keys(rows).map(key => [
                            <ProductCategoryRow category={key} />,
                            ...rows[key].map(product => (
                                <ProductRow {...product} />
                            ))
                        ])
                    }
                </tbody>
            </table>
        )
    }
}

interface FilterableProductTableState {
    filterText: string
    inStockOnly: boolean
}

export class FilterableProductTable extends React.Component<{}, FilterableProductTableState> {
    constructor() {
        super()
        this.state = {
            filterText: '',
            inStockOnly: false
        }
    }
    handleFileterTextInput = (filterText: string) => {
        this.setState({
            filterText: filterText
        })
    }
    handleInStockInput = (inStockOnly: boolean) => {
        this.setState({
            inStockOnly: inStockOnly
        })
    }
    render() {
        return (
            <div>
                <SearchBar
                    {...this.state}
                    onFilterTextInput={this.handleFileterTextInput}
                    onInStockInput={this.handleInStockInput} />
                <ProductTable {...this.state} products={input} />
            </div>
        )
    }
}
