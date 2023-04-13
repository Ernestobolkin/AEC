import { useEffect, useState } from "react";
import "./alert.scss"

interface AlertProps {
    type: string;
    message: string;
    function: Function;
}

const Alert = (props: AlertProps) => {
    const { message, type } = props;
    const [classString, setClassString] = useState("");
  
    useEffect(() => {
        console.log("type", type)
      switch (type) {
        case "danger":
          setClassString("alert alert-danger");
          break;
        case "success":
          setClassString("alert alert-success");
          break;
        default:
          break;
      }
    }, [type]);
  
    return (
      <div className={classString} role={type}>
        {message}
      </div>
    );
  }
export default Alert;