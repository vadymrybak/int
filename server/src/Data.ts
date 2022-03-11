
export interface IComment {
	id: string;
	username: string;
	message: string;
}

export interface IProduct {
	id: string;
	name: string;
	size: string;
	color: string;
	price: number;
	comments: IComment[];
}

export const shopProducts: IProduct[] = [
	{
		id: "13f2d1d0-36c7-4ab7-8869-f779af7561a6",
		name: "Jeans",
		size: "L",
		color: "Black",
		price: 20,
		comments: []
	},
	{
		id: "0867a7de-bef9-476c-ab27-fe1ed2d85463",
		name: "Jacket",
		size: "XL",
		color: "White",
		price: 40,
		comments: []
	},
	{
		id: "2360305d-8ac2-46f8-beee-a28b710cd544",
		name: "Pants",
		size: "M",
		color: "Grey",
		price: 25,
		comments: []
	},
	{
		id: "c865365d-7943-490c-a7be-b70d1941d237",
		name: "T-shirt",
		size: "M",
		color: "Red",
		price: 10,
		comments: []
	},
	{
		id: "62927b8c-58f3-4c5c-84ec-93e1473e0c8b",
		name: "Hat",
		size: "SM",
		color: "Green",
		price: 15,
		comments: []
	}
];