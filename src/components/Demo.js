import React from 'react'
import classes from "./Demo.module.css"

function Demo({apiRequest}) {

    // eslint-disable-next-line no-new-object
    /*let dato1 = {};
    dato1.name = 'ALERTA CREADA POR API';
    let dato2 = {};
    dato2.type = 'Malware';
    let dato3 = {};
    dato3.owner = 'l1.soc';
    let dato4 = {};
    dato4.severity = 'Critical';
    let dato5 = {};
    dato5.clientid = 'Cagliari';

    let jsArray = new Array(3);
    jsArray[0] = dato1;
    jsArray[1] = dato2;
    jsArray[2] = dato3;
    jsArray[3] = dato4;
    jsArray[4] = dato5;

    console.log(JSON.parse(JSON.stringify(jsArray)))*/

    return (
        <div className={classes.inner} onClick={apiRequest}>Demo</div>
    )
}

export default Demo