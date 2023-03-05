import React, { useContext } from "react";
import { context } from "./ContextProvider";

const Cell = ({ mark, id }) => {

    const { conqourCell } = useContext(context);

    return (
        <div className="cell" onClick={() => !mark && conqourCell(id)}>
            {mark}
        </div>
    );

};
export default Cell;