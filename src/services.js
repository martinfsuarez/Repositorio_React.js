const products = [
    { id: "1", name: "iphone 11", price: 800, category: "phones"},
    { id: "2", name: "iphone 11 Pro", price: 850, category: "phones"},
    { id: "3", name: "iphone 11 Pro Max", price: 900, category: "phones"},
    { id: "4", name: "iPad Pro", price: 800, category: "tablets"},
    { id: "5", name: "iPad Air", price: 600, category: "tablets"},
    { id: "6", name: "iPad", price: 400, category: "tablets"},
    { id: "7", name: "Macbook Air", price: 500, category: "notebooks"},
    { id: "8", name: "Macbook Pro", price: 700, category: "notebooks"},
    { id: "9", name: "Macbook Pro 16-inch", price: 1000, category: "notebooks"},
];


//getProduct

export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           //Aqui buscamos el producto por su ID
            const product = products.find(p => p.id === id)

            //Y si existe el producto
            if (product) {
                resolve(product)
            } else{
                reject("No existe el producto");
            }
        }, 1000)
    });
};


//getProducts

export const getProducts = (category) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //si category existe filtramos por categoria
            //Y si category no exite se devuelven todos los productos

            const productsFiltered = category ? products.filter(product => product.category === category) : products;

            resolve(productsFiltered);
        }, 1000)
    })
}