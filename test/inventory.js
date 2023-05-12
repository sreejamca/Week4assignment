const inventory = [
    {
      id: 1,
      productName: "Product 1",
      customerPrice: 10,
      myPrice: 7,
      qtyAvailable: 50,
      perItemProfit: null,
    },
    {
      id: 2,
      productName: "Product 2",
      customerPrice: 20,
      myPrice: 15,
      qtyAvailable: 30,
      perItemProfit: null,
    },
    {
      id: 3,
      productName: "Product 3",
      customerPrice: 5,
      myPrice: 3,
      qtyAvailable: 100,
      perItemProfit: null,
    },
    {
      id: 4,
      productName: "Product 4",
      customerPrice: 15,
      myPrice: 12,
      qtyAvailable: 20,
      perItemProfit: null,
    },
    {
      id: 5,
      productName: "Product 5",
      customerPrice: 8,
      myPrice: 6,
      qtyAvailable: 75,
      perItemProfit: null,
    },
    {
      id: 6,
      productName: "Product 6",
      customerPrice: 30,
      myPrice: 25,
      qtyAvailable: 10,
      perItemProfit: null,
    },
    {
      id: 7,
      productName: "Product 7",
      customerPrice: 12,
      myPrice: 9,
      qtyAvailable: 40,
      perItemProfit: null,
    },
    {
      id: 8,
      productName: "Product 8",
      customerPrice: 25,
      myPrice: 20,
      qtyAvailable: 15,
      perItemProfit: null,
    },
    {
      id: 9,
      productName: "Product 9",
      customerPrice: 18,
      myPrice: 14,
      qtyAvailable: 25,
      perItemProfit: null,
    },
    {
      id: 10,
      productName: "Product 10",
      customerPrice: 7,
      myPrice: 5,
      qtyAvailable: 60,
      perItemProfit: null,
    },
  ];
  
  // ** Solve the following. Try to keep the code dynamic. Print statements will work for this exercise

// How many different types of products are in your inventory? (i.e. how many objects are in the array?)
  let noOfProducts=[];
  inventory.forEach(elements=>{
   noOfProducts.push(elements.productName);

  });
  console.log("There are" +' '+noOfProducts.length+' ' +"different products in the inventory");
  console.log("*************************************************************************************");
// What is the total number of products you have in your warehouse? (i.e. what is the sum of the quantities of all the products in your inventory?)

 let totalNoOfProduct=0;
inventory.forEach(element=>{
totalNoOfProduct+=element.qtyAvailable; 
})
console.log("The warehouse has total"+' '+totalNoOfProduct+' '+ "products");
console.log("*************************************************************************************");
// What is the total profit you would make if you sold all available units of all products at their current customerPrice? Reassign the perItemProfit property of each product to reflect this.

let totalAmtOfProfit=0;
 inventory.forEach(element=>{
 element.perItemProfit=(element.customerPrice-element.myPrice);
 totalAmtOfProfit+=(element.perItemProfit* element.qtyAvailable);
 })
 console.log("The total amount of profit is" + ' '+totalAmtOfProfit);
 console.log("*************************************************************************************");
// What is the total profit you would make per item if you sold all available units at a discount of10% off the customerPrice? No need to assign a new property for this one.

 let totalAmtOfProfitAfterDiscount=0;
 inventory.forEach(element=>{
 element.perItemProfit=((element.customerPrice)-(element.customerPrice *(0.1)))-(element.myPrice);
 totalAmtOfProfitAfterDiscount+=(element.perItemProfit* element.qtyAvailable);
 });
 console.log("Total amount after discount is :"+' '+totalAmtOfProfitAfterDiscount);
 console.log("*************************************************************************************");
// What is the average profit per item?

 let theAvgProfit=(totalAmtOfProfit/inventory.length);
 console.log("The average profit is:" +' '+theAvgProfit);
 console.log("*************************************************************************************");

// Create a variable to keep track of a low inventory amount (e.g. 30). Then, find all the products that have a quantity less than the low inventory amount. Finally, print the names of those products to the console.

 let lowInventoryProducts=' ';
inventory.forEach(elements=>{
  if(elements.qtyAvailable<30){
    lowInventoryProducts=elements.productName;
  console.log(lowInventoryProducts+' '+" has low inventory amount")
  }
})
console.log("*************************************************************************************");
 

  
  




  
  
  
  
  