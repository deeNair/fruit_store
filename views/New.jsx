const React = require('react');

function New(){
    return(
        <div>
            <h1>New fruits page</h1>
            <form action='/fruits' method='POST'>
                Name:<input type="text" name="name" />
                <br/>
                Color:<input type="text" name="color"/>
                <br/>
                Is ready to eat:<input type='checkbox' name='readyToEat'/>
                <br/>
                <input type="submit" value="create new fruit"/>

            </form>
        </div>
    )
}

module.exports=New;