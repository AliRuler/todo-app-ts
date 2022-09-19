import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import {ColorData} from "../data/colorData";
import Button from "@mui/material/Button";
import DoneAllRoundedIcon from '@mui/icons-material/DoneAllRounded';
import {useState} from "react";
import React from "react";
import {useNavigate} from "react-router-dom";
import {useSelector, useDispatch} from "react-redux";
import {addTodo} from "../redux/reducer/todo.reducer";
import Todo from "../models/todo";

const TodoForm = (): JSX.Element => {
    const [form, setForm] = useState<Todo>({
        id: Math.floor(Math.random()*1000),
        title: '',
        bookmark: false,
        description: '',
        status: false,
        theme: ''
    })

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setForm({...form, [event.target.name]: event.target.value})
    }

    const handleSelectColor = (color: string): void => {
        setForm({...form, theme: color})
    }

    const handleSubmit = () => {
        dispatch(addTodo(form))
        navigate('/')
    }

    return (
        <Grid container justifyContent={'center'} alignItems={'center'} dir={'rtl'}>
            <Grid container maxWidth={'600px'} spacing={3} p={2}>
                <Grid item xs={12} my={1}>
                    <TextField name={'title'} onChange={handleChange} value={form.title} sx={{
                        width: '100%',
                        '.css-1mt7n99-MuiInputBase-root-MuiOutlinedInput-root': {borderRadius: '16px'}
                    }} label="موضوع" variant="outlined"/>
                </Grid>
                <Grid item xs={12} my={1}>
                    <TextField name={'description'} onChange={handleChange} value={form.description} sx={{
                        width: '100%',
                        '.css-1mt7n99-MuiInputBase-root-MuiOutlinedInput-root': {borderRadius: '16px'}
                    }} label="توضیحات" variant="outlined"/>
                </Grid>
                <Grid container item xs={12} my={1}>
                    <Grid item xs={12}>
                        <Typography>
                            رنگ کارت مورد نظر خود را انتخاب کنید:
                        </Typography>
                    </Grid>
                    <Grid container spacing={2} justifyContent={'center'} item xs={12} my={1}>
                        {ColorData.map(color => (
                            <Grid key={color.id} item xs={2}>
                                <Grid width={'30px'}
                                      height={'30px'}
                                      borderRadius={'50%'}
                                      bgcolor={color.name}
                                      border={form.theme === color.name ? '2px solid #000' : 'unset'}
                                      onClick={() => handleSelectColor(color.name)}
                                      sx={{cursor: 'pointer'}}
                                />
                            </Grid>
                        ))}
                    </Grid>
                    <Grid container item xs={12} my={3} sx={{justifyContent: {xs: 'center', md: 'flex-end'}}}>
                        <Button variant="contained" onClick={handleSubmit} sx={{
                            boxShadow: 'none',
                            bgcolor: 'primary.light',
                            minWidth: '200px',
                            maxWidth: '260px',
                            borderRadius: '12px'
                        }}
                        disabled={!(form.title && form.theme && form.description)}>
                            <Typography>
                                ثبت
                            </Typography>
                            <DoneAllRoundedIcon/>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default TodoForm