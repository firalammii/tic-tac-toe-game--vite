import React, { useContext } from "react";
import { context } from "./ContextProvider";

const Cell = ({ mark, id }) => {

    const { conqourCell, winFound, toggleRenderModal } = useContext(context);
    const { found } = winFound;

    function decideOnClick (id) {
        if (found) {
            toggleRenderModal();
        }
        else {
            !mark && conqourCell(id);
        }
    }

    return (
        <div
            className={`cell ${mark && "not-allowed"} ${found && "win"}`}
            onClick={() => decideOnClick(id)}
        >
            {mark}
        </div>
    );

};
export default Cell;