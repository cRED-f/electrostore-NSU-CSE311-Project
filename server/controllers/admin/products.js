import { db } from "../../data/database.js";
import { v4 as uuidv4 } from "uuid";
//insert all the products into database

export const products = async (req, res) => {
  const {
    name,
    description,
    discount,
    stock,
    date,
    warranty,
    types,
    sub_categories_name,
    storage_size,
    price,
  } = req.body;

  const productId = uuidv4();
  const image = req.file.filename;
  try {
    db.query(
      "SELECT categories_id, sub_categories_id,sub_categories_name FROM sub_categories WHERE sub_categories_name = ?",
      [sub_categories_name],
      (err, result) => {
        if (err) {
          res.status(500).json({
            success: false,
            message: "An error occurred",
          });
        } else {
          if (!result.length) {
            res.status(404).json({
              success: false,
              message: "No such sub category",
            });
          } else {
            // Insert the product
            db.query(
              "INSERT INTO products (products_id, name, description, discount, stock, date, warranty,categories_id, types,sub_categories_id,sub_categories_name,image) VALUES (?,?,?,?, ?, ?, ?, ?, ?, ?, ?, ?)",
              [
                productId,
                name,
                description,
                discount,
                stock,
                date,
                warranty,
                result[0].categories_id,
                types,
                result[0].sub_categories_id,
                sub_categories_name,
                image,
              ],
              (err, productResult) => {
                if (err) {
                  console.error(err);
                  return res.status(500).json({
                    success: false,
                    message: "An error occurred",
                  });
                } else {
                  // Insert storage options
                  const storageId = uuidv4();
                  db.query(
                    "INSERT INTO storage_options_products (storage_id, products_id, storage_size, price) VALUES (?, ?, ?, ?)",
                    [storageId, productId, storage_size, price],
                    (err, storageResult) => {
                      if (err) {
                        if (err) {
                          return res.status(500).json({
                            success: false,
                            message: "Internal server error",
                          });
                        }
                      } else {
                        res.status(200).json({
                          success: true,
                          message: "Product added successfully",
                        });
                      }
                    }
                  );

                  // Execute all storage option insert queries
                }
              }
            );
          }
        }
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "An error occurred",
    });
  }
};

//delete products from database

export const deleteProducts = async (req, res) => {
  const { products_id } = req.params;
  if (!products_id) {
    return res.status(500).json({
      success: false,
      message: "Missing 'products_id' data in the request body",
    });
  }

  try {
    // Delete storage options first
    db.query(
      "DELETE FROM storage_options_products WHERE products_id=?",
      [products_id],
      (err, storageResult) => {
        if (err) {
          db.rollback(() => {
            console.error(err);
            res.status(500).json({
              success: false,
              message: "An error occurred",
            });
          });
        } else {
          // Delete the product
          db.query(
            "DELETE FROM products WHERE products_id=?",
            [products_id],
            (err, result) => {
              if (err) {
                db.rollback(() => {
                  console.error(err);
                  res.status(500).json({
                    success: false,
                    message: "An error occurred",
                  });
                });
              } else {
                // Commit the transaction
                db.commit((err) => {
                  if (err) {
                    db.rollback(() => {
                      console.error(err);
                      res.status(500).json({
                        success: false,
                        message: "An error occurred",
                      });
                    });
                  } else {
                    res.status(200).json({
                      success: true,
                      message: `Product ${products_id} and associated storage options deleted successfully`,
                    });
                  }
                });
              }
            }
          );
        }
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "An error occurred",
    });
  }
};
// Update product information in the database

export const updateProducts = async (req, res) => {
  const { products_id } = req.params; // Get the product ID from the request parameters
  const {
    name,
    description,
    discount,
    stock,
    date,
    warranty,
    types,
    storage_size,
    price,
  } = req.body;
  const image = req.file.filename;

  try {
    // Update the product information
    db.query(
      "UPDATE products SET name=?, description=?, discount=?, stock=?, date=?, warranty=?, types=?, image=? WHERE products_id=?",
      [
        name,
        description,
        discount,
        stock,
        date,
        warranty,
        types,
        image,
        products_id,
      ],
      (err, productResult) => {
        if (err) {
          console.error(err);
          return res.status(500).json({
            success: false,
            message: "An error occurred while updating the product",
          });
        } else {
          // Delete existing storage options for the product
          db.query(
            "DELETE FROM storage_options_products WHERE products_id=?",
            [products_id],
            (err, deleteResult) => {
              if (err) {
                console.error(err);
                return res.status(500).json({
                  success: false,
                  message: "An error occurred while updating storage options",
                });
              } else {
                // Insert updated storage options

                const storageId = uuidv4();
                db.query(
                  "INSERT INTO storage_options_products (storage_id, products_id, storage_size, price) VALUES (?, ?, ?, ?)",
                  [storageId, products_id, storage_size, price],
                  (err, storageResult) => {
                    if (err) {
                      console.error(err);
                      return res.status(500).json({
                        success: false,
                        message:
                          "An error occurred while inserting storage options",
                      });
                    } else {
                      // Commit the transaction
                      db.commit((err) => {
                        if (err) {
                          console.error(err);
                          return res.status(500).json({
                            success: false,
                            message:
                              "An error occurred while committing the transaction",
                          });
                        } else {
                          // Transaction was successful
                          res.status(200).json({
                            success: true,
                            message: "Product updated successfully",
                          });
                        }
                      });
                    }
                  }
                );
              }
            }
          );
        }
      }
    );
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: "An error occurred",
    });
  }
};
