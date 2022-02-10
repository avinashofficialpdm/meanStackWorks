products = [
    {
      pid: 100,
      p_name: "samsungA52",
      band: "5g",
      price: 30000,
      display: "amoled",
    },
    {
      pid: 101,
      p_name: "samsungf41",
      band: "4g",
      price: 15000,
      display: "amoled",
    },
    {
      pid: 102,
      p_name: "mi10promax",
      band: "4g",
      price: 19000,
      display: "amoled",
    },
    { pid: 103, p_name: "mi11lite", band: "5g", price: 22000, display: "led" },
    {
      pid: 104,
      p_name: "iphone12pro",
      band: "5g",
      price: 80000,
      display: "amoled",
    },
    { pid: 105, p_name: "realme", band: "4g", price: 12000, display: "led" },
  ];
  
  
  
  
  // # print product names only
 products.map(data=>data["p_name"]).forEach(element => console.log(element));
  
  // # print all mobile details whose display="amoled"
  console.log(products.filter(data=>data["display"]=="amoled"));
  
  // # print 5g moboile names
  products.filter(data=>data["band"]=="5g").forEach(element=>console.log(element["p_name"]))
  
  // # filter mobiles based on price
    console.log("Sorted order of price ");
    console.log(products.sort((data1,data2)=>data1["price"]-data2["price"]).map(element=>element["p_name"]));  
  // # print costly mobile
    console.log( "Costly phone is ",products.reduce((data1,data2)=>data1["price"]>data2["price"]?data1["p_name"]:data2["p_name"]));  

  // # print low cost mobile
    var lowCostPhone = products.reduce((data1,data2)=>data1["price"]<data2["price"]?data1:data2)
    console.log("low cost phone is",lowCostPhone["p_name"]);



















