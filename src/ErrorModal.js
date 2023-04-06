import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import { useDispatch } from "react-redux";
const ErrorModal = ({ error }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch({ type: "closeError" });
  };
  return (
    <div className="errorModal">
      <div className="innerErrorModal">
        <ClearIcon className="closeError" onClick={handleClose} />
        <span className="errorModalSpan">Error!!</span>
        {error}
      </div>
    </div>
  );
};

export default ErrorModal;
