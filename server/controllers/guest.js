import ProductModel from "../models/Product.js";

export async function getHistoryGuest(req, res) {
  console.log("Server getHistoryGuest");

  try {
    const idProducts = Object.values(req.query)[0].split(",");

    let product = [];

    for (let i = 0; i < idProducts.length; i++) {
      const itemProduct = await ProductModel.findById(idProducts[i]);

      itemProduct.imageSrc.splice(2, 7);
      product.push(itemProduct);
    }

    return res.status(200).json({ history__view: product });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
}
export async function getGuestCart(req, res) {
  console.log("Server getGuestCart");

  try {
    const { carts_id } = req.query;

    if (carts_id) {
      const shopping_cart_id = carts_id.split(",");
      console.log("shopping_cart_id = ", shopping_cart_id);

      const products = await ProductModel.find(
        { _id: { $in: shopping_cart_id } },
        {
          imageSrc: 1,
          name: 1,
          price: 1,
          action: 1,
          actionPrice: 1,
          counter: 1,
          status: 1,
          user: 1,
        }
      );

      for (let idx = 0; idx < products.length; idx++) {
        products[idx].imageSrc = products[idx].imageSrc[0];
      }

      return res.status(200).json(products);
    } else {
      return res.status(404).json({ message: "Не вказано id товарів" });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
}
