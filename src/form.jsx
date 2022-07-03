import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const Form = (props)=>{
    return(
        <>
            <form>
            <TextField
                    id="standard-basic"
                    label="Add a item"
                    variant="standard"
                    onChange={props.change}
                    name={props.name}
                    value={props.value}
                    className="form-control"
                />
                <Button 
                variant="text"
                onClick={props.click}
                ><AddIcon/>
                </Button>
            </form>
        </>
    )
}

export default Form;