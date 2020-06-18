const SHOW_ALL = "SHOW_ALL";
const SHOW_COMPLETED = "SHOW_COMPLETED";
const SHOW_ACTIVE = "SHOW_ACTIVE";



export const addTodo = ({ text, id }) => ({
    type: "ADD_TODO",
    id,
    text,
});

export const delTodo = ({ id }) => ({
    type: "DEL_TODO",
    id,
});

export const togleTodo = (text) => ({
    type:text
});

export const setVisibleFilter = {
    SHOW_ALL: SHOW_ALL,
    SHOW_COMPLETED: SHOW_COMPLETED,
    SHOW_ACTIVE: SHOW_ACTIVE,
};


