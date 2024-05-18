


export default function handler(req, res) {
   const product=[
   { name:"MacBook Pro",
    price:2300,
    category:"laptop"
   },
   { name:"Hp Pro",
    price:2300,
    category:"laptop"
   },

]
   
    res.status(200).json({ product });
  }
  