import React from "react";

const ListSearch = (props) => {
    const searchChangeHandler = (event) => {
        props.searchSuggestionHandler(
            props.content.filter((item) =>
                item.task.startsWith(event.target.value)
            ),
            event.target.value
        );
    };

    return (
        <div>
            <input
                className="rounded-pill"
                type="text"
                placeholder="Search Tasks"
                onChange={searchChangeHandler}
            />
        </div>
    );
};

export default ListSearch;
