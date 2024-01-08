import { useEffect, useState } from "react";

const URL="https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=";

const FinalState = () => {
    const[drinksData,setDrinksData]=useState([]);
    const[searchItem,setSearchItem]=useState(" ");
    const[loading,setLoading]=useState(false);
    const[isError,setIsError]=useState({status:false,msg:" "});

    const fetchDrink= async (apiURL)=>{
        setLoading(true);
        setIsError({status:false,msg:" "})
        try{
            const response = await fetch(apiURL);
            const {ingredients} = await response.json();
            console.log(ingredients);
            setDrinksData(ingredients);
            setLoading(false)
            setIsError({status:false,msg:" "})
        }catch(error){
            console.log(error)
            setLoading(false)
            setIsError({status:true,msg:error.message||"Something went wrong please try again"})
        }
    };
    
    useEffect (()=>{
        const correctURl=`${URL}${searchItem}`
        fetchDrink(correctURl);
    },[searchItem]);

    return ( 
        <div>
            <form>
                <input type="text" name="search" id="search" placeholder="Search Something"
                value={searchItem} onChange={(e)=>setSearchItem(e.target.value)}/>
            </form>
            <hr />
            {loading && !isError?.status &&<h3>Loading...</h3>}
            {isError?.status && <h3>{isError.msg}</h3>}
            {!loading && !isError && isError.status && (
            <ul>
                {drinksData.map((eachDrink)=>{
                    const {idDrink,strDrink,strDrinkThumb}=eachDrink;
                    return(
                        <li key={idDrink}>
                            <div>
                                <img src={strDrinkThumb} alt={strDrink}/>
                            </div>
                            <div>
                                <h3>{strDrink}</h3>
                            </div>
                        </li>
                    )
                })}
            </ul>
            )}
        </div>
     );
}
 
export default FinalState;