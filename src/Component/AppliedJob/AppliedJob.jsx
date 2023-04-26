import React, { useEffect, useState } from 'react';
import './AppliedJob.css'
import { getShoppingCart } from '../../utilities/fakedb';
import AppliedJobCard from '../AppliedJobCard/AppliedJobCard';
const AppliedJob = () => { 

        const [products, setProducts] = useState([]);
        useEffect(() => {
            fetch("job.json")
            .then((res) => res.json())
            .then((data) => setProducts(data));
        }, []);
       console.log(products.id);
    //    {
    //      const proID= products.map(pd=>pd.id) 
    //      console.log(proID);
    //    }
        useEffect(() => {
          const storedcart = getShoppingCart(); 
          console.log(storedcart);
          // to get the product by id into LocalStorage
          // step 1 : get id
          let saveCart = [];
          for (const id in storedcart) { 
            // console.log(id)
            //step 2 get the product by using id
            let addedProduct = products.find(product=> product.id == id);
            // let addedProduct = products.find(product=> console.log(product.id));
            // console.log("added", addedProduct);
            //step 3 quntity of the product
            if (addedProduct) {
              const quantity = storedcart[id];
              addedProduct.quantity = quantity;
              // step 4 add the addedProduct to the save cart
              saveCart.push(addedProduct); 
            }
            // console.log('added product',addedProduct);
          }
          //  step 5  set to cart
          setCart(saveCart);
        }, [products]);
      const [cart,setCart]=useState([]) 
      console.log(cart); 
      
        // let job=cart.map((pd)=>pd.id) 
        // // const [id,job_title]=job;
        // console.log(job); 
       
      

    return (
        <div>
            <div className="apply">
               <h1>Applied Jobs</h1> 
               </div>
               <div className='jobs'>
                { 
                cart.map((job)=><AppliedJobCard
                
                job={job}
                
                ></AppliedJobCard>)
                }
               </div>
           
        </div>
    );
};

export default AppliedJob;