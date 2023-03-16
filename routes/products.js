const express = require('express');
const router = express.Router();
const { 
    getProducts, 
    getProduct, 
    addProduct, 
    updateProduct, 
    deleteProduct, 
    searchQueryProducts, 
    searchParamsProducts, 
    searchQueryMutileProducts,
    filterProduct,
    sortAscProduct,
    sortDescProduct,
    paginationProduct, 
    getProductsByPagination,
    } = require('../controllers/productsController')





// Search kiểu query
router.get('/search', searchQueryProducts); // phải đưa nó lên trước thì route này mới ăn. Nếu đưa về sau thì nó ko ăn vì nó bị các route trước ăn vào rồi.

// Search kiểu query nhiều loại
router.get('/search-mutile', searchQueryMutileProducts); 

// Search kiểu params
router.get('/search/:name', searchParamsProducts);

// Filters
router.get('/filter', filterProduct); // phải đưa nó lên trước thì route này mới ăn. Nếu đưa về sau thì nó ko ăn vì nó bị các route trước (CRUD) ăn vào rồi.

// Sort
router.get('/sort-asc', sortAscProduct);
router.get('/sort-desc', sortDescProduct);

// Pagination
router.get('/pagination', getProductsByPagination);


// CRUD
router.get('/', getProducts);
router.get('/:id', getProduct);
router.post('/', addProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);





module.exports = router;