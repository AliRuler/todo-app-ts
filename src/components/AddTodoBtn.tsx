import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';

const AddTodoBtn = (): JSX.Element => {
    return (
        <Grid display={'flex'} justifyContent={'center'} item xs={12} my={1}>
            <Link to={'/todoform'}>
                <Button
                    sx={{
                        bgcolor: 'primary.dark',
                        width: '250px',
                        color: 'common.white',
                        borderRadius:2,
                        '&:hover': {
                            bgcolor: 'common.white',
                            color: 'primary.dark',
                            border: '1px solid',
                            borderColor: 'primary.dark'
                        }
                    }}>
                    <ControlPointRoundedIcon/>
                    <Typography ml={2} sx={{cursor: 'pointer'}}>
                        اضافه کردن تسک جدید
                    </Typography>
                </Button>
            </Link>
        </Grid>
    )
}

export default AddTodoBtn