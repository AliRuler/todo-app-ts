import Snackbar from "@mui/material/Snackbar";
import Alert from '@mui/material/Alert'
import React, {useEffect, useState} from "react";


const SnackbarAction = () => {
    const [open, setOpen] = useState(true)

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        console.log(2)
        if (reason === 'clickaway') {
            return;
        }
    }

    useEffect(() => {
        console.log(4)
    }, [])

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                This is a success message!
            </Alert>
        </Snackbar>
    )
}

export default SnackbarAction