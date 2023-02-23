const OrderModel = require("../models/Order");
const ProductModel = require("../models/Product");
const UserModel = require("../models/User");

module.exports.getOrdersUser = async function (req, res) {
  console.log("Server getOrdersUser");

  try {
    const order = await OrderModel.find({ "info.merchant": req.user._id });
    const orderClone = JSON.parse(JSON.stringify(order));

    const productCard_MyOrder = [];
    for (let idx = 0; idx < orderClone.length; idx++) {
      for (let i = 0; i < orderClone[idx].product.info.product_id.length; i++) {
        const product = await ProductModel.findById(
          orderClone[idx].product.info.product_id[i]
        );
        if (i === 0) {
          productCard_MyOrder.push([product]);
        } else {
          productCard_MyOrder[idx].push(product);
        }
      }

      const seller = await UserModel.findById(orderClone[idx].info.seller, {
        name: 1,
        lastName: 1,
        _id: 0,
      });
      orderClone[idx].info.sellerName =
        seller.name +
        (seller.lastName ? " " : "") +
        (seller.lastName ? seller.lastName : "");
    }

    const data = {
      MyOrder: orderClone,
      ProductCard_MyOrder: productCard_MyOrder,
    };

    return res.status(200).json(data);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

module.exports.createOrder = async function (req, res) {
  console.log("Server createOrder");

  try {
    const productByListId = await ProductModel.find({
      _id: { $in: req.body.product.info.product_id },
    });

    if (productByListId.length === req.body.product.info.product_id.length) {
    } else {
      // not all products found
      console.log("Not all products found");
    }

    const dateNow = new Date();
    const status = 0; // 0 - new, 1 - payment, 2 - sent , 3 - return, 4 - delivered, 5 - done

    const info = {
      seller: req.body.info.seller,
      merchant: req.body.info.merchant,
      dateOfCreation: dateNow,
      // dateOfDispatch: null, // default = null
      orderID: `${generateRandomWord()}${dateNow.getMonth()}${dateNow.getFullYear()}${dateNow.getMinutes()}${dateNow.getHours()}${dateNow.getSeconds()}${dateNow.getDate()}`,
      status,
    };

    const product = {
      info: {
        product_id: req.body.product.info.product_id,
        counter: req.body.product.info.counter,
        totalPrice: req.body.product.info.totalPrice,
        totalActionPrice: req.body.product.info.totalActionPrice,
        totalCounterProduct: req.body.product.info.totalCounterProduct,
      },
    };

    const contacts = {
      info: {
        name: req.body.contacts.info.name,
        email: req.body.contacts.info.email,
        tel: req.body.contacts.info.tel,
      },
    };

    const shipping = {
      info: {
        addressesPresent: req.body.shipping.info.addressesPresent,
        addressesMainDescription:
          req.body.shipping.info.addressesMainDescription,
        addressesWarehousesDescription:
          req.body.shipping.info.addressesWarehousesDescription,
      },
      selectTypeShipping: req.body.shipping.selectTypeShipping,
      selectTypeShippingText: req.body.shipping.selectTypeShippingText,
    };

    const payment = {
      info: {},
      selectTypePayment: req.body.payment.selectTypePayment,
      selectTypePaymentText: req.body.payment.selectTypePaymentText,
    };

    const order = new OrderModel({
      info,
      product,
      contacts,
      shipping,
      payment,
    });

    order.save();

    return res.status(200).json({ message: "Замовлення успішно створено" });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

function generateRandomWord() {
  const words = [
    "AKN",
    "SRT",
    "TML",
    "KKA",
    "NNP",
    "TTS",
    "KLB",
    "ABL",
    "HJS",
    "HPO",
  ];

  const randomNumber = Math.random().toString().split(".")[1].charAt(0);

  return words[randomNumber];
}
