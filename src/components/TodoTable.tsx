import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import FlagRoundedIcon from '@mui/icons-material/FlagRounded';
import Todo from "../models/todo";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {bookmarkTodo, checkTodo, deleteTodo} from "../redux/reducer/todo.reducer";
import {Link} from "react-router-dom";

const TodoTable = (): JSX.Element => {
    const database = useSelector((db: { todo: [] }) => db.todo)
    const [todos, setTodos] = useState<Todo[]>(database)

    const dispatch = useDispatch()

    const handleDelete = (id: number) => {
        dispatch(deleteTodo(id))
    }

    const handleCheck = (id: number) => {
        dispatch(checkTodo(id))
    }

    const handleBookmark = (id: number) => {
        dispatch(bookmarkTodo(id))
    }

    useEffect(() => {
        setTodos(database)
    }, [database])

    return (
        <>
            {todos.map(todo => (
                <Grid container alignItems={'center'} my={1} bgcolor={todo.theme} p={2} borderRadius={2}
                      color={'common.white'} justifyContent={'space-between'}>
                    <Grid container item xs={6}>
                        <Grid display={'flex'} alignItems={'center'} item>
                            <Link to={`/todos/${todo.id}`}>
                                <Grid display={'flex'} alignItems={'center'}>
                                    <InfoOutlinedIcon sx={{color:'common.white'}}/>
                                </Grid>
                            </Link>
                        </Grid>
                        <Grid display={'flex'} alignItems={'center'} item>
                            {todo.bookmark
                                ?
                                <FlagRoundedIcon onClick={() => handleBookmark(todo.id)} sx={{cursor: 'pointer'}}/>
                                :
                                <FlagOutlinedIcon onClick={() => handleBookmark(todo.id)} sx={{cursor: 'pointer'}}/>
                            }
                        </Grid>
                        <Grid display={'flex'} alignItems={'center'} item>
                            <DeleteOutlineRoundedIcon onClick={() => handleDelete(todo.id)} sx={{cursor: 'pointer'}}/>
                        </Grid>
                    </Grid>
                    <Grid container item xs={6} justifyContent={'flex-end'} alignItems={'center'}
                          sx={{cursor: 'pointer'}}>
                        <Typography mr={1}>
                            {todo.title}
                        </Typography>
                        {todo.status
                            ?
                            <CheckCircleOutlineRoundedIcon onClick={() => handleCheck(todo.id)}/>
                            :
                            <RadioButtonUncheckedRoundedIcon onClick={() => handleCheck(todo.id)}/>
                        }
                    </Grid>
                </Grid>
            ))}
        </>
    )
}

export default TodoTable