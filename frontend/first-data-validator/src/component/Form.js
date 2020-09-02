import React, {useState} from 'react';
import Moment from "moment";
import CryptoJS from 'crypto-js';

function Form() {
    const [data, setData] = useState({
        // tdate: '1599067841',
        //txntype: 'sale',
        //txntype: 'preauth',
        //txntype: 'postauth',
        // txntype: 'void',
        txntype: 'return',
        timezone: 'America/Buenos_Aires',
        txndatetime: Moment(new Date()).format("YYYY:MM:DD-HH:mm:ss"),
        hash_algorithm: 'HMACSHA256',
        storename: '5920063001',
        mode: 'payonly',
        chargetotal: '100',
        currency: '032',
        responseFailURL: 'http://60608599dfc6.ngrok.io/response_failure',
        responseSuccessURL: 'http://60608599dfc6.ngrok.io/response_success',
        transactionNotificationURL: 'http://60608599dfc6.ngrok.io/transaction_notification',
        paymentMethod: 'M',
        cardnumber: '5165 8500 0000 0008',
        expmonth: '12',
        expyear: '22',
        cvm: '123',
        numberOfInstallments: 3,
        installmentsInterest: false,
        // transactionId: "C-13ddc23f-463c-4a4c-8dc3-2874a2112d3b",
        full_bypass: true,
        language: "es_ES",
        // oid: 'C-756d562a-3796-4a90-83f1-f93258717e83'
    });

    function createHash(chargetotal, currency){
        let FIRSTDATA_SHAREDSECRET='rG5?Jn~6ur';
        let separator = '|';
        let stringToExtendedHash =
            data.cardnumber+separator+
            chargetotal+separator+
            currency+separator+
            data.cvm+separator+
            data.expmonth+separator+
            data.expyear+separator+
            data.full_bypass+separator+
            data.hash_algorithm+separator+
            data.installmentsInterest+separator+
            data.language+separator+
            data.mode+separator+
            data.numberOfInstallments+separator+
            // data.oid+separator+
            data.paymentMethod+separator+
            data.responseFailURL+separator+
            data.responseSuccessURL+separator+
            data.storename+separator+
            // data.tdate+separator+
            data.timezone+separator+
            // data.transactionId+separator+
            data.transactionNotificationURL+separator+
            data.txndatetime+separator+
            data.txntype;
        let hashHMACSHA256 = CryptoJS.HmacSHA256(stringToExtendedHash, FIRSTDATA_SHAREDSECRET);
        return CryptoJS.enc.Base64.stringify(hashHMACSHA256);
    }

    const hashValue = createHash(data.chargetotal, data.currency);

    return(
        <div>
            <h1>Formulario</h1>
            <form method="post" action="https://test.ipg-online.com/connect/gateway/processing">
                <input className={"form-control"} type="text" name={"txntype"} defaultValue={data.txntype}/>
                <input className={"form-control"} type="text" name={"timezone"} defaultValue={data.timezone}/>
                <input className={"form-control"} type="text" name={"txndatetime"} defaultValue={data.txndatetime}/>
                <input className={"form-control"} type="text" name={"hash_algorithm"} defaultValue={data.hash_algorithm}/>
                <input className={"form-control"} type="text" name={"storename"} defaultValue={data.storename}/>
                <input className={"form-control"} type="text" name={"mode"} defaultValue={data.mode}/>
                <input className={"form-control"} type="text" name={"chargetotal"} defaultValue={data.chargetotal}/>
                <input className={"form-control"} type="text" name={"currency"} defaultValue={data.currency}/>
                <input className={"form-control"} type="text" name={"responseFailURL"} defaultValue={data.responseFailURL}/>
                <input className={"form-control"} type="text" name={"responseSuccessURL"} defaultValue={data.responseSuccessURL}/>
                <input className={"form-control"} type="text" name={"transactionNotificationURL"} defaultValue={data.transactionNotificationURL}/>
                <input className={"form-control"} type="text" name={"paymentMethod"} defaultValue={data.paymentMethod}/>
                <input className={"form-control"} type="text" name={"hashExtended"} defaultValue={hashValue}/>
                <input className={"form-control"} type="text" name={"cardnumber"} defaultValue={data.cardnumber}/>
                <input className={"form-control"} type="text" name={"expmonth"} defaultValue={data.expmonth}/>
                <input className={"form-control"} type="text" name={"expyear"} defaultValue={data.expyear}/>
                <input className={"form-control"} type="text" name={"cvm"} defaultValue={data.cvm}/>
                <input className={"form-control"} type="text" name={"full_bypass"} value={data.full_bypass}/>
                <input className={"form-control"} type="text" name={"language"} value={data.language}/>
                {/*<input className={"form-control"} type="text" name={"oid"} value={data.oid}/>*/}
                {/*<input className={"form-control"} type="text" name={"transactionId"} value={data.transactionId}/>*/}
                <input className={"form-control"} type="text" name={"numberOfInstallments"} value={data.numberOfInstallments}/>
                <input className={"form-control"} type="text" name={"installmentsInterest"} value={data.installmentsInterest}/>
                {/*<input className={"form-control"} type="text" name={"tdate"} value={data.tdate}/>*/}
                <button className={"btn btn-success"} type="submit" >Enviar</button>
            </form>
        </div>
    );
}
export default Form;
