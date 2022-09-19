import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

interface AddTodoBtnProps {
    setOpen: (state: boolean) => void
}

const AddTodoBtn = ({setOpen}: AddTodoBtnProps): JSX.Element => {
    return (
        <Grid display={'flex'} justifyContent={'space-between'} item xs={12} my={1} height={'50px'}>
            <Link to={'/todoform'}>
                <Button
                    sx={{
                        bgcolor: 'primary.dark',
                        width: '150px',
                        color: 'common.white',
                        borderRadius: 2,
                        '&:hover': {
                            bgcolor: 'common.white',
                            color: 'primary.dark',
                            border: '1px solid',
                            borderColor: 'primary.dark'
                        }
                    }}>
                    <ControlPointRoundedIcon/>
                    <Typography ml={2} fontSize={'14px'} sx={{cursor: 'pointer'}}>
                        تسک جدید
                    </Typography>
                </Button>
            </Link>
            <Link to={'/'}>
                <Button
                    onClick={() => setOpen(true)}
                    sx={{
                        bgcolor: 'primary.dark',
                        width: '150px',
                        color: 'common.white',
                        borderRadius: 2,
                        '&:hover': {
                            bgcolor: 'common.white',
                            color: 'primary.dark',
                            border: '1px solid',
                            borderColor: 'primary.dark'
                        }
                    }}>
                    <FilterAltIcon/>
                    <Typography ml={2} fontSize={'14px'} sx={{cursor: 'pointer'}}>
                        فیلتر تسک ها
                    </Typography>
                </Button>
            </Link>
        </Grid>
    )
}

export default AddTodoBtn