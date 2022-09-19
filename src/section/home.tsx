import Grid from "@mui/material/Grid";
import TodoTable from "../components/TodoTable";
import AddTodoBtn from "../components/AddTodoBtn";

const Home = (): JSX.Element => {

    return (
        <Grid container justifyContent={'center'}>
            <Grid item p={1} width={'600px'}>
                <AddTodoBtn/>
                <TodoTable/>
            </Grid>
        </Grid>
    )
}

export default Home