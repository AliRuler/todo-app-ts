import Grid from "@mui/material/Grid";
import TodoTable from "../components/TodoTable";
import AddTodoBtn from "../components/AddTodoBtn";
import FilterDialog from "../components/FilterDialog";
import {useState} from "react";

const Home = (): JSX.Element => {
    const [open, setOpen] = useState(false)
    const [filter, setFilter] = useState({done: false, bookmark: false, all: true});

    return (
        <Grid container justifyContent={'center'}>
            <Grid item p={1} width={'600px'}>
                <AddTodoBtn setOpen={setOpen}/>
                <TodoTable filter={filter}/>
                <FilterDialog open={open} setOpen={setOpen} filter={filter} setFilter={setFilter}/>
            </Grid>
        </Grid>
    )
}

export default Home