const { db } = require("../config/db");

// CRUD

const getProducts = (req, res) => {
  const q = "SELECT * FROM product";
  db.query(q, (err, data) => {
    if (err) res.status(500).json(err);
    return res.status(200).json(data);
  });
};

const getProduct = (req, res) => {
  const q = "SELECT * FROM product where id=?";
  db.query(q, [req.params.id], (err, data) => {
    if (err) res.status(500).json(err);
    return res.status(200).json(data);
  });
};

const addProduct = (req, res) => {
  const values = [
    req.body.name,
    req.body.description,
    req.body.image,
    req.body.price,
  ];
  const q = "INSERT INTO product (name, description, image, price) VALUES (?)";
  db.query(q, [values], (err, data) => {
    if (err) res.status(500).json(err);
    return res.status(201).json({ message: "Success created product", data });
  });
};

const updateProduct = (req, res) => {
  const values = [
    req.body.name,
    req.body.description,
    req.body.image,
    req.body.price,
    req.params.id,
  ];
  const q =
    "UPDATE product SET name=?, description=?, image=?, price=? where id=?";
  db.query(q, [...values], (err, data) => {
    if (err) res.status(500).json(err);
    return res.status(200).json("Success Updated product");
  });
};

const deleteProduct = (req, res) => {
  const q = "DELETE FROM product where id=?";
  db.query(q, [req.params.id], (err, data) => {
    if (err) res.status(500).json(err);
    return res.status(200).json("Success Deleted product");
  });
};

/**************** SEARCH KIỂU PARAMS ******************/
// http://localhost:5000/api/products/search/iphone
const searchParamsProducts = (req, res) => {
  console.log("getSearchParamsProducts");
  const q = "SELECT * FROM product where name LIKE ? '%' ";
  db.query(q, [req.params.name], (err, data) => {
    if (err) res.status(500).json(err);
    return res.status(200).json(data);
  });
};

/**************** SEARCH KIỂU QUERY ******************/
// http://localhost:5000/api/products/search?name=iphone
const searchQueryProducts = (req, res) => {
  console.log("getSearchQueryProducts");
  const sql = "SELECT * FROM product where name LIKE ? '%'";
  db.query(sql, [req.query.name], (err, data) => {
    if (err) res.status(500).json(err);
    return res.status(200).json(data);
  });
};

/**************** SEARCH KIỂU QUERY NHIỀU LOẠI******************/
// http://localhost:5000/api/products/search-mutile?name=iphone&price=10000
const searchQueryMutileProducts = (req, res) => {
  console.log("getSearchQueryMutileProducts");
  console.log(req.query);
  const values = [req.query?.name, Number(req.query?.price)];
  const sql = "SELECT * FROM product where name LIKE ? '%' or price >= ?";
  db.query(sql, [...values], (err, data) => {
    if (err) res.status(500).json(err);
    return res.status(200).json(data);
  });
};

// ------------end ----------------

const filterProduct = (req, res) => {
  const values = [req.query.name, req.query.price];
  const q = "SELECT * FROM product where name LIKE ? '%' and price >= ?";
  db.query(q, [...values], (err, data) => {
    if (err) res.status(500).json(err);
    return res.status(200).json(data);
  });
};

const sortAscProduct = (req, res) => {
  const q = "SELECT * FROM product ORDER BY price ASC";
  db.query(q, (err, data) => {
    if (err) res.status(500).json(err);
    return res.status(200).json(data);
  });
};

const sortDescProduct = (req, res) => {
  const q = "SELECT * FROM product ORDER BY price DESC";
  db.query(q, (err, data) => {
    if (err) res.status(500).json(err);
    return res.status(200).json(data);
  });
};

// Bình làm phân trang
const paginationProduct = (req, res) => {
  let { page, limit } = req.query;

  const q = "SELECT * FROM product";
  db.query(q, (err, data) => {
    if (err) res.status(500).json(err);

    let result = [];

    if (page == 1) {
      for (let i = 0; i < limit; i++) {
        result.push(data[i]);
      }
    } else {
      for (let i = (page - 1) * limit; i < page * limit; i++) {
        result.push(data[i]);
      }
    }

    return res.status(200).json(result);
  });
};



// ChatGPT làm phân trang
const getProductsByPagination = (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const pageSize = parseInt(req.query.pageSize) || 3;
  const startIndex = (page - 1) * pageSize;
  const endIndex = page * pageSize;

  const q = "SELECT * FROM product";

  db.query(q, (err, data) => {
    if (err) res.status(500).json(err);

    const results = data.slice(startIndex, endIndex);

    return res.status(200).json({
      results,
      currentPage: page,
      pageSize,
      totalItems: data.length,
      totalPages: Math.ceil(data.length / pageSize),
    });
  });
};









module.exports = {
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
};

// data để test

// {
//     "name": "Sam sung A8",
//     "description": "Hàng chất lượng, giá phải chăng",
//     "image": "",
//     "price": 1200000
// }
