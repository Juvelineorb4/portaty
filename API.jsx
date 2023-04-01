const Category = {
    id: String,
    name: String,
    image: String,
}
const Brand = {
    id: String,
    name: String,
    image: String,
}

const Product = {
    id: String,
    name: String,
    images: Array,
    price: Number,
    brand: Brand,
    category: Category,
    reviews: Array,
    ratings: Array,
    carrier: Boolean,
}

const Product_Example = {
    id: 'PA-01', // P = Phone, A = Apple, 01 = Primer producto de ese grupo. Una nomenclatura para gestionar el tema de los IDs y asi saber que no se repetiran y sera facil recordarlos
    name: 'Iphone 14 Pro Max',
    images: ['URL', 'URL', 'URL'],
    price: 999.99,
    brand: Brand,
    category: Category,
    reviews: [{review}, {review}, {review}],
    rating: [{rating}, {rating}, {rating}],
    carrier: False
}
