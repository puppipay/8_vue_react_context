import { useState, useEffect, useRef } from "react";

// persists value between renders

function Refapp() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);
    const [oldcount, setOldcount] = useState(0);
    const inputRef = useRef("100");
    const [refdata, setRefdata] = useState("");

    // useEffect gets called when ever render happens
    // this changes the count value, so render happens again
    // on changing the count current value, it does not cause re-render
    useEffect(() => {
        count.current = count.current + 1;
    });



    // this changes the count value, so render happens again
    // this causes continous rerenders
    /*
        useEffect(() => {
            setOldcount(oldcount + 1);
        });
    */


    const handlechange = () => {
        console.log(inputRef.current.value);
        setRefdata(inputRef.current.value);
    }

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Render Count: {count.current}</h1>

            <h1>Render Old Count: {oldcount}</h1>

            <input type="text" ref={inputRef} onChange={handlechange} />
            <h1> {refdata} </h1>


        </>
    );


}

function Component2() {
    return (
        <div>Component2</div>
    )
}








export default Refapp