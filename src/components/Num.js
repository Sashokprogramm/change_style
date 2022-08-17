import React, {useState} from 'react';

const Num = () => {
    const [num1, setNum1] = useState(1);
    const [num2, setNum2] = useState(1);
    return (
        <>
            <div>
                <button onClick={() => {
                    setNum1(num1 + 1);
                }}>Прибавить 1
                </button>
                <button onClick={() => {
                    setNum1(num1 + 5);
                }}>Прибавить 5
                </button>
                <button onClick={() => {
                    setNum1(num1 + 10);
                }}>Прибавить 10
                </button>
                <p>{num1}</p>
            </div>
            <div>
                <button onClick={() => {
                    setNum2(num2 + 1);
                }}>Прибавить 1
                </button>
                <button onClick={() => {
                    setNum2(num2 - 1);
                }}>Отнять 1
                </button>
                <p>{num2}</p>
            </div>
        </>
    );
};
export default Num;