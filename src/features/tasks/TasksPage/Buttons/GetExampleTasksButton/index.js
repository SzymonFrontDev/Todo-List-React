import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectIsError, selectIsLoading } from "../../../tasksSlice";
import { Button, Error,} from "../styled";

const GetExampleTasksButton = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectIsLoading);
    const error = useSelector(selectIsError);

    return (
        <>
            {error ?
                <Error>
                    Wystąpił błąd, nie udało się pobrać przykłądowych zadań.
                </Error>
                :
                <Button onClick={() => dispatch(fetchExampleTasks())}
                disabled={loading} >
                    {loading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
                </Button>
            }
        </>
    )
};

export default GetExampleTasksButton;
