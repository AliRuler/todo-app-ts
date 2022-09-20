import Grid from "@mui/material/Grid";
import {useEffect, useState} from "react";
import Todo from "../models/todo";
import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate, useParams} from "react-router-dom";
import Typography from "@mui/material/Typography";
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import ModeEditOutlineRoundedIcon from '@mui/icons-material/ModeEditOutlineRounded';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import FlagOutlinedIcon from '@mui/icons-material/FlagOutlined';
import FlagRoundedIcon from '@mui/icons-material/FlagRounded';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded';
import TodoDetailsBtn from "../components/TodoDetailsBtn";
import {bookmarkTodo, checkTodo, deleteTodo, updateTodo} from "../redux/reducer/todo.reducer";

const TodoDetails = () => {
    const database = useSelector((db: { todo: {todo: Todo[]} }) => (db.todo.todo))
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()

    const [todo, setTodo] = useState<Todo>({
        id: 1,
        title: '',
        bookmark: false,
        description: '',
        status: false,
        theme: ''
    })

    const handleDelete = (id: number) => {
        dispatch(deleteTodo(id))
        navigate('/')
    }

    const handleCheck = (id: number) => {
        dispatch(checkTodo(id))
    }

    const handleBookmark = (id: number) => {
        dispatch(bookmarkTodo(id))
    }

    const handleUpdate = (id: number) => {
        navigate(`/todoform/update?${todo.id}`)
    }


    useEffect(() => {
        setTodo(database.filter(todo => todo.id === Number(params.todoId))[0])
    }, [database])

    return (
        <Grid container justifyContent={'center'} alignItems={'center'} dir={'rtl'}>
            <Grid container maxWidth={'600px'} p={2}>
                <Grid container item xs={12} bgcolor={todo.theme} borderRadius={'8px'}
                      position={'relative'} p={2}>
                    <Grid container justifyContent={'center'} alignItems={'center'} position={'absolute'} width={'40px'}
                          height={'40px'} bgcolor={'common.white'} borderRadius={'0px 0px 0px 8px'} top={0} right={0}>
                        <Typography>
                            {todo.id}
                        </Typography>
                    </Grid>
                    <Grid container justifyContent={'center'} alignItems={'center'} position={'absolute'} width={'40px'}
                          height={'40px'} bgcolor={'common.white'} borderRadius={'0px 0px 8px 0px'} top={0} left={0}>
                        <Link to={'/'}>
                            <Grid container justifyContent={'center'} alignItems={'center'} color={'common.black'}>
                                <KeyboardBackspaceRoundedIcon/>
                            </Grid>
                        </Link>
                    </Grid>
                    <Grid item xs={12} mt={6} color={'common.white'} minHeight={'180px'}>
                        <Typography>
                            موضوع : {todo.title}
                        </Typography>
                        <Typography mt={2}>
                            توضیحات : {todo.description}
                        </Typography>
                    </Grid>
                    <Grid container justifyContent={'space-between'} item xs={12} my={1}>
                        <TodoDetailsBtn title={'اولویت'} todo={todo} action={handleBookmark}
                                        icon={todo.bookmark
                                            ?
                                            <FlagRoundedIcon/>
                                            :
                                            <FlagOutlinedIcon/>}
                        />
                        <TodoDetailsBtn title={'وضعیت'} todo={todo} action={handleCheck}
                                        icon={todo.status
                                            ?
                                            <CheckCircleOutlineRoundedIcon/>
                                            :
                                            <RadioButtonUncheckedRoundedIcon/>}
                        />
                    </Grid>
                    <Grid container justifyContent={'space-between'} item xs={12} my={1}>
                        <TodoDetailsBtn title={'حذف'} todo={todo} icon={<DeleteOutlineRoundedIcon/>}
                                        action={handleDelete}/>
                        <TodoDetailsBtn title={'ویرایش'} todo={todo} icon={<ModeEditOutlineRoundedIcon/>}
                                        action={handleUpdate}/>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default TodoDetails