import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Item } from "../../Input";
import searchQueryParamName from "../../TaskPage/searchQueryParamName";
import { Wrapper } from "./style";

export default () => {
    const location = useLocation();
    const history = useHistory();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

    const onInputChange = ({target}) => {
        const searchParams = new URLSearchParams(location.search);

        if(target.value.trim() === "") {
            searchParams.delete(searchQueryParamName);
        } else {
            searchParams.set(searchQueryParamName, target.value);
        }

        history.push(`${location.pathname}?${searchParams.toString()}`);
    }

    return (
   <Wrapper>
            <Item
            placeholder="Filtruj zadania"
            value = {query || ""}
            onChange={onInputChange}
        />
   </Wrapper>
    );
};