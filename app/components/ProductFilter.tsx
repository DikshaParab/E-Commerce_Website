"use client"

interface ProductFilterProps {
    search: string;
    category: string;
    onSearchChange: (value: string) => void;
    onCategoryChange: (value: string) => void;
}

const ProductFilter = ({
    search, category, onSearchChange, onCategoryChange}: ProductFilterProps) => {

    return (
        <div>
            <h2>Product Filter</h2>
            <input type="text"
            placeholder="Search Products..."
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}/>

            <select value={category}
            onChange={(event) => onCategoryChange(event.target.value)}>
                <option value="All">All</option>
                <option value="Electronics">Electronics</option>
                <option value="Clothes">Clothes</option>
                <option value="Jewellery">Jewellery</option>
            </select>

            <p>Search: {search} </p>
            <p>Category: {category} </p>
        </div>
    );
};

export default ProductFilter;