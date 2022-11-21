import React, { useState } from "react";
import { isLoggedIn } from "../auth";
import { useNavigate } from "react-router";

const Protected = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(isLoggedIn);
    const navigate = useNavigate();

    if (!loggedIn) {
        navigate("/");
        return;
    }

    return <>{children}</>;
};

export default Protected;
