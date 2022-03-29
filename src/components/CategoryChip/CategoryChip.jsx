import "./CategoryChip.css";
import { useStateContext } from "../../context/state-context";
export const CategoryChip=()=>{

    const {state:{category}}=useStateContext();
    return(
    <div className="category__filters">
    {category.map((cat)=>(
        <button className="filter-options" key={cat._id}>{cat.categoryName}</button>
     ))
    }   

</div>
    )
}