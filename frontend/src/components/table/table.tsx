import React, { useEffect, useState } from "react";
// import apiService from "../../service/apiService";
import { generalRequest } from "../../service/apiService";

const TableCrud = () => {
    const [paymentData, setPaymentData] = useState({
        name:"",
        description:"",
        date:"",
        amount:"",
    });
    const [paymentList, setPaymentList] = useState<typeof paymentData[]>([]);

    const onChange = (event: any) => {
        setPaymentData({
            ...paymentData,
            [event.target.name]: event.target.value,
        });
    }

    const submit = async (event: any) => {
        event.preventDefault();
        console.log(paymentData);
        // setPaymentList([...paymentList, paymentData]);
        generalRequest("update", "POST", paymentData);
    }
    const getData = async () => {
        let responseData = await generalRequest("payments", "GET");
        responseData.forEach((payment: any) => {
            setPaymentList([...paymentList, {
                name: payment.Name,
                description: payment.Description,
                date: payment.Date,
                amount: payment.Amount,
            }]);
        });
        console.log("responseData",responseData)
        console.log(paymentList)
    }

    useEffect  (() => {
        getData();
    }, [])
    

    return(
            <>
                <div className="container input">
                    <form className="row g-3" onSubmit={submit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                onChange={onChange}
                                value={paymentData.name}
                                className="form-control"
                                name="name"
                                placeholder="Name of the payment"
                            />
                            <input type="text"
                                onChange={onChange}
                                value={paymentData.description}
                                className="form-control"
                                name="description"
                                placeholder="Description of the payment"
                            />
                            <input type="text"
                                onChange={onChange}
                                value={paymentData.date}
                                className="form-control"
                                name="date"
                                placeholder="Date of the payment"
                            />
                            <input type="text"
                                onChange={onChange}
                                value={paymentData.amount}
                                className="form-control"
                                name="amount"
                                placeholder="Amount of the payment"
                            />
                            <button type="submit" className="btn btn-primary">Save</button>
                        </div>
                    </form>
                </div>
                <div className="container output">
                    <div className="row">
                        <div className="col">
                            <strong>Name</strong>
                        </div>
                        <div className="col">
                            <strong>Description</strong>
                        </div>
                        <div className="col">
                            <strong>Date</strong>
                        </div>
                        <div className="col">
                            <strong>Amount</strong>
                        </div>
                    </div>
                    {
                        paymentList.map((payment: any, index:number) => {
                            return(
                                <div key={index} className="row">
                                    <div className="col">
                                        {payment.name}
                                    </div>
                                    <div className="col">
                                        {payment.description}
                                    </div>
                                    <div className="col">
                                        {payment.date}
                                    </div>
                                    <div className="col">
                                        {payment.amount}
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </>
        )
}


export default TableCrud;