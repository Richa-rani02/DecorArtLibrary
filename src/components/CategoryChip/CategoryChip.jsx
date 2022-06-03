import "./CategoryChip.css";
import { useStateContext } from "../../context/state-context";
import { dataActions } from "../../Utils/actions";
export const CategoryChip = () => {

    const { state: { category }, dispatch } = useStateContext();
    const categorySortHandler = (catName) => {
        dispatch({ type: dataActions.FILTER_BY_CATEGORY, payload: catName });
    }
    return (
        <div className="category__filters">
            {category.map((cat) => (
                <button className={`filter-options ${cat.isCatActive && 'active'}`} key={cat._id}
                    onClick={() => categorySortHandler(cat.categoryName)}>{cat.categoryName}</button>
            ))
            }

        </div>
    )
}