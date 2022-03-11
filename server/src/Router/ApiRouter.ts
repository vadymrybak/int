import express, { Router, Request, Response } from "express";
import { IProduct, shopProducts } from "../Data";


export const router: Router = express.Router();

router.get("/products", (req: Request, res: Response) => {
	res.json(shopProducts);
});

router.get("/productDetails", (req: Request, res: Response) => {
	const { id } = req.query;
	res.json(shopProducts.find((product: IProduct) => product.id === id));
});

router.post("/addComment", (req: Request, res: Response) => {
	const { username, message, id } = req.body;
	console.log(username, message);
	const product: IProduct = shopProducts.find((product: IProduct) => product.id === id);
	if (product) {
		product.comments.push({
			id,
			username,
			message
		});
		res.send("Comment added");
	}
	else {
		res.status(500).send("Cannot find product");
	}

});