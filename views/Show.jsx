const React = require('react');
/** class components
class Show extends React.Component{
    render(){
        return(
            <h1>show routes</h1>
        )
    }
}*/

function Show(props){
    const {fruit}=props;
   console.log(props);

    return (
    <div>
    <h1>Hello Show function Component</h1>
    <p>The {fruit.name} is {fruit.color} {" "}
          {fruit.readyToEat 
          ? 'its ready to eat ':'dont touch the fruit its not ready to eat'}
    </p>
    <p></p>
    </div>

    )
}

module.exports = Show;

