import React, { useContext } from "react";
import { context } from "./ContextProvider";

const Cell = ({ mark, id }) => {

    const { conqourCell, winFound, renderModal, toggleRenderModal } = useContext(context);
    function decideOnClick (id) {
        console.log(renderModal);
        console.log(mark);
        if (renderModal) {

            toggleRenderModal();
        }
        else if (mark) {
            console.log(id);
            !mark && conqourCell(id);
        }
        else { toggleRenderModal; }
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