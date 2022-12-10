import React, { useState } from 'react';

const Task = () => {

    const [value, setValue] = useState(0);
    const [position, setPosition] = useState([]);
    const [result, setResult] = useState(false);

    const inputArr = [
        {
            type: "number",
            id: 1,
            value: "",
        }
    ];

    const [arr, setArr] = useState(inputArr);

    const addInput = () => {
        setArr(
            [
                ...arr,
                {
                    type: "number",
                    value: "",
                    id: (arr.length + 1),
                }
            ]
        );
    };

    const handleChange = (e, item) => {

            const temp = e;
            const newArr = [...arr]
    
            newArr.map(f => {
                if (f.id === item.id) {
                    f.value = e.target.value;
                }
            })
            setArr(newArr);


    };

    const handleAllCheckBox = (e) => {
        setResult(e.target.checked)

        if (e.target.checked) {
            let sum = 0;
            let newArray = [];
            arr.map(i => {
                sum = sum + parseInt(i.value);
                newArray.push(i.id);
            })
            setValue(sum)
            setPosition(newArray);
        } else {
            setValue(0)
            setPosition([]);
        }

    }


    const selectedCheckBox = (e, item) => {

        if(item.value && item.value >= 0){

            if (e.target.checked) {
    
                setValue(value + parseInt(item.value))
                const newArr = [...position];
                newArr.push(item.id);
                setPosition(newArr);
    
            } else {
                setValue(value - parseInt(item.value))
                const temp = position.filter(f => (f !== item.id))
                setPosition(temp);
            }

        }else{
            alert('Number must be greater than 0 or equal')
        }


    }

    return (
        <div className="container pt-3 mb-5">
            <div className="technical__task">
                <div className="d-flex justify-content-center">
                    <p className="step">Step :</p>
                </div>
                <div className="row g-3 d-flex justify-content-start pt-4">
                    <div className="col-sm-8">
                        <div className="row g-3 mb-3 d-flex justify-content-end">
                            <div className="col-sm-3">
                                <p htmlFor="NoOfTextbox" className="form__label">No. Of Textbox:</p>
                            </div>
                            <div className="col-sm-4">
                                <p className="form-control form-control-sm">{arr.length}</p>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col-sm-12">
                                <button type="text" className="btn btn__contact float-end" onClick={addInput}>Add Textbox</button>
                            </div>
                            <div className="col-sm-12">
                                <div className="row g-3 d-flex justify-content-end">
                                    <div className="col-sm-4">
                                        <div className="form-check">
                                            <input className="form-check-input" id="exampleCheck1"
                                                type="checkbox"
                                                onChange={(e) => handleAllCheckBox(e)}
                                            />
                                            <p className="form__label">All Check</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12">
                                {arr.map((item, i) => {
                                    return (
                                        <section key={item.id}>
                                            <div className="row g-3 mb-3 d-flex justify-content-end">
                                                <div className="col-sm-4">
                                                    <div className="form-check">
                                                        <input
                                                            // id={item.id}
                                                            checked={position.includes(item.id)}
                                                            className="form-check-input"
                                                            type="checkbox"
                                                            onChange={(e) => selectedCheckBox(e, item)}
                                                        />
                                                        <input
                                                            htmlFor="exampleCheck1"
                                                            placeholder={`Write a price ${item.id}`}
                                                            className="form-control form-control-sm form__control__sm"
                                                            onChange={(e) => handleChange(e, item)}
                                                            value={item.value}
                                                            id={i}
                                                            type={item.type}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </section>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="row d-flex justify-content-end">
                            <label htmlFor="OutputIs" className="col-sm-2 col-form-label col-form-label-sm">Output is: </label>
                            <div className="col-sm-5">
                                <label id="OutputIs" className="w-100 form__output">{`Selected Total Amount is = ${value} Selected Position is = ${position}`}</label>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Task;