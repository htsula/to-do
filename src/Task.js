import React from "react";

const Task = (props) => {
    return (
        <li className="list-group-item m-3 d-flex justify-content-between">
            <h4>{props.name}</h4>
            {!props.noDelete ? (
                <button onClick={() => props.deleteItemHandler(props.id)}>
                    Delete Item
                </button>
            ) : null}
        </li>
    );
};

export default Task;
