import React, { useState } from "react";
import apiService from "../../service/apiService";

export const TableCrud = () => {
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
        setPaymentList([...paymentList, paymentData]);
    }

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
                            className="form-control name"
                            name="name"
                            placeholder="Name of the payment"
                        />
                        <input type="text"
                            onChange={onChange}
                            value={paymentData.description}
                            className="form-control description"
                            name="description"
                            placeholder="Description of the payment"
                        />
                        <input type="text"
                            onChange={onChange}
                            value={paymentData.date}
                            className="form-control date"
                            name="date"
                            placeholder="Date of the payment"
                        />
                        <input type="text"
                            onChange={onChange}
                            value={paymentData.amount}
                            className="form-control amount"
                            name="amount"
                            placeholder="Amount of the payment"
                        />
                        <button type="submit">Save</button>
                    </div>
                </form>
            </div>
            {
                paymentList.map((payment: any, index:number) => {
                    return(
                        <div key={index} className="container output">
                            <div className="row">
                                <span>{payment.name}</span> <br />
                                <span>{payment.description}</span> <br />
                                <span>{payment.date}</span> <br />
                                <span>{payment.amount}</span> <br />
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}