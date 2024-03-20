import { useState } from "react";

// useState is a hook that allows us to use State feature

function User()
{

    let [name, setName] = useState("Serhat") //this is state variable

    // let name = "Serhat" This is normal variable

    let [age,setAge] = useState(28)

    function changeName()
    {
        setName("Thor") 
    }

    function changeAge()
    {
        setAge(30);   
    }

    function doSomething(planet)
    {
        console.log('Hello World'+" "+planet);
    }


    

    return(

        <div className="user">
            <h1>{name}</h1>
            <h1>{age}</h1>

            <button onClick={changeName}>Change Name</button>
            <button onClick={changeAge}>Change Age</button>
            {/* <button onClick={doSomething}>Do something</button> */}
            <button onClick={function(){
                doSomething("Mars")
            }}>Do Something</button>
        </div>
    )
}

export default User;