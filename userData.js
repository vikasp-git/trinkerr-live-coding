import React from "react";

class UserData extends React.Component{

constructor(props){
    super(props);
    this.state = {
        items: [],
        DataisLoaded: false
    };
}

componentDidMount(){
    fetch("http://3.108.225.220:5000/api/user-access-token")
    .then((res) => res.json())
    .then((json)=>{
        this.setState({
            items: json,
            DataisLoaded: true
        });
    })
}
render(){
    const{DataisLoaded,items}=this.state;
    if(!DataisLoaded) return <div><h1>Please wait...</h1></div>

    return (
        <div>
            <h1>Data from API</h1>
            {
                items.map((item)=>(
                    <ul>
                        <li>
                            {item.name}
                        </li>
                        <li>
                            {item.ltp}
                        </li>
                        <li>
                            {item.lcp}
                        </li>
                    </ul>
                ))

            }
        </div>
    );
}
}
export default UserData;