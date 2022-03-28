
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (
    <div className="section__buttons">
        {tasks.length > 0 && (
            <>
                <button onClick={toggleHideDone} className="section__button">
                    {hideDone ? "Pokaż" : "Ukryj"} ukończone
                </button>
                <button
                    className="section__button"
                    disabled={tasks.every(({ done }) => done)}
                >
                    Ukończ wszystkie
                </button>
            </>
        )}
    </div>
);


export default Buttons;