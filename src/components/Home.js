import React, {useState} from "react"
import classes from "./Home.module.css"
import Demo from "./Demo.js"
import Button from "./Buttons.js"


export default function Home() {

    const [res, setRes] = useState("")

    const buttons = ["C", "9", "/", "8", "7", "6", "*", "5", 
    "4", "3", "+", "2", "1", "0", "-", ".", "Del", "="];

    const findval = () => {
        let result = Function("return " +  res)();
        setRes(result.toString());
    }

    const apiRequest = () => {
    /* METODO PARA ENVIAR INFO A LA API */
    alert('Entra en la funcion!');

    }

    const handler = (arg) => {
        if(res === "Infinity"){
            setRes("");
            return;
        }

        if(arg === "C") {
            setRes("");
        }   
        else if(arg === "=") 
            findval();
        else if(arg === "Del"){
            let n = res.length;
            if(n > 0)
                setRes(res.slice(0, n-1));
        }
        else setRes(res.concat(arg));
    }

    return (
        <>
            <div className={classes.home}>
                <div className={classes.inner}>
                    <div className={classes.result}>
                        <div className={classes.resbox}>
                            {res}
                        </div>
                    </div>
                
                    <div className={classes.btns}>
                        {buttons.map((ele, index)=>{return <Button handler={handler} value={ele} key={index}></Button>})}
                    </div>
                    
                    </div>
                    {/*<Demo apiRequest={apiRequest}></Demo>*/}
            </div>
        </>
    );
}