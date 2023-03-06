import React, { useContext } from "react";
import { context } from "./ContextProvider";

const Cell = ({ mark, id }) => {

    const { conqourCell, winFound, toggleRenderModal } = useContext(context);

    function decideOnClick (id) {
        if (winFound.found) {
            toggleRenderModal();
        }
        else {
            !mark && conqourCell(id);
        }
    }

    return (
        <div
            className={`cell ${mark && "not-allowed"} ${winFound.found && "win"}`}
            onClick={() => decideOnClick(id)}
        >
            {mark}
        </div>
    );

};
export default Cell;