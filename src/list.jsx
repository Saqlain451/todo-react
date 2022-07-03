import React from "react";
import CancelIcon from '@mui/icons-material/Cancel';
const List = (props) => {
    return (
        <>
            <div className="list">
                <CancelIcon onClick={()=>{props.click(props.id)}} />
                <li>{props.listitem}</li>
            </div>
        </>
    )
}
export default List;