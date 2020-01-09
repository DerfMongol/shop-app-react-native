import PRODUCTS from '../../data/dummy-data'

const intitialState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')
}

export default (state = intitialState, action) => {
    return state
}