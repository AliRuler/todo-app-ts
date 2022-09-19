import Dialog from "@mui/material/Dialog";
import Grid from "@mui/material/Grid";
import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface FilterDialogProps {
    open: boolean,
    setOpen: (state: boolean) => void,
    filter: { done: boolean, bookmark: boolean, all: boolean},
    setFilter: (state: any) => void
}

const FilterDialog = ({open, setOpen, filter, setFilter}: FilterDialogProps): JSX.Element => {

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilter({...filter, [event.target.name]: event.target.value === 'true'});
    };

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Dialog PaperProps={{style: {borderRadius: '16px'}}} maxWidth={'xs'} fullWidth={true} open={open}>
            <Grid container>
                <Grid display={'flex'} justifyContent={'center'} item xs={12}>
                    <Grid width={'100px'} height={'5px'} bgcolor={'primary.main'} borderRadius={4}/>
                </Grid>
                <Grid container item xs={12} p={2} dir={'rtl'}>
                    <Grid item xs={12}>
                        <FormControl>
                            <FormLabel>فیلتر تسک ها</FormLabel>
                            <RadioGroup
                                name="done"
                                value={filter.done}
                                onChange={handleChange}
                            >
                                <FormControlLabel value={true} control={<Radio/>} label="انجام شده"/>
                                <FormControlLabel value={false} control={<Radio/>} label="انجام نشده"/>
                            </RadioGroup>
                            <RadioGroup
                                name="bookmark"
                                value={filter.bookmark}
                                onChange={handleChange}
                            >
                                <FormControlLabel value={true} control={<Radio/>} label="نشان دار"/>
                                <FormControlLabel value={false} control={<Radio/>} label="بدون نشان"/>
                            </RadioGroup>
                            <RadioGroup
                                name="all"
                                value={filter.all}
                                onChange={handleChange}
                            >
                                <FormControlLabel value={false} control={<Radio/>} label="اعمال فیلتر"/>
                                <FormControlLabel value={true} control={<Radio/>} label="نمایش همه"/>
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} mt={1}>
                        <Button fullWidth={true} onClick={handleClose} sx={{
                            bgcolor: 'primary.main',
                            color: 'common.white',
                            borderRadius: 2,
                            '&:hover': {
                                bgcolor: 'common.white',
                                color: 'primary.dark',
                                border: '1px solid',
                                borderColor: 'primary.dark'
                            }
                        }}>
                            <Typography>
                                ثبت
                            </Typography>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Dialog>
    )
}

export default FilterDialog