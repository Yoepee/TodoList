import React, { useState } from "react";

const useBoolean = () => {
    const [value, setValue] = useState(false);

    const setTrue = () => setValue(true);
    const setFalse = () => setValue(false);
    const toggle = () => setValue((prev) => !prev);

    return { value, setValue, setTrue, setFalse, toggle };
};

export default useBoolean;
