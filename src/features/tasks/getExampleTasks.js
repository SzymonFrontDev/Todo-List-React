export const getExampleTasks = async () => {
    const response = await fetch("/Todo-List-React/exampleTasks.json");

    if (!response.ok) {
        new Error(response.statusText);
    }
    return await response.json();
};