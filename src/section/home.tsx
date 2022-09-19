import Grid from "@mui/material/Grid";
import TodoTable from "../components/TodoTable";
import AddTodoBtn from "../components/AddTodoBtn";
import FilterDialog from "../components/FilterDialog";
import {useState} from "react";

const Home = (): JSX.Element => {
    const [open, setOpen] = useState(true)
    const [filter, setFilter] = useState({done: true, bookmark: false, all: false});

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