import { useState } from "react";
import { useEffect } from "react";

export type Products={
    readonly id?: number ;
    title: String ;
    description:string ;
    image:string ;
}
const Home=()=>{
    const [getProduct, setGetProduct]=useState<Products[]>();
    const [loading, setLoading]=userState(false);

    async function fetchData(){
        setLoading(true);
        try{
            const fetchProduct =await fetch("https://fakestoreapi.com/products")
            const res=await fetchProduct.json();
            console.log(res)
            setGetProduct(res);
        }catch(error){
            console.log("error: ",error)
        }finally{
            setLoading(false)
        }

        useEffect(()=>{
            fetchData();
        },[])
        return (
            <div>
                { loading ? (
                    <loadingComponent/>
                    ):(
                        <div className="flex justify-center gap-4 flex-wrap"> 
                            { getProducts?.map((pro,index)=>(
                                <CardComponent
                                key={index}
                                image={pro.image}
                                title={pro.title}
                                description={pro.description}
                            />
                            ))}
                        </div>
                    )}
            </div>
        );
    };
}