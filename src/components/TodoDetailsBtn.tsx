import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Todo from "../models/todo";

interface TodoDetailsBtnProps {
    title: string,
    todo: Todo,
    icon: any
    // action: () =>
}


const TodoDetailsBtn = ({title, todo, icon}: TodoDetailsBtnProps): JSX.Element => {
    return (
        <Button variant={'contained'}
                sx={{
                    bgcolor: 'common.white',
                    color: todo.theme,
                    width: '110px',
                    '&:hover': {bgcolor: 'common.white', boxShadow: 'none'}
                }}>
            <Typography>
                {title}
            </Typography>
            {icon}
        </Button>
    )
}

export default TodoDetailsBtn