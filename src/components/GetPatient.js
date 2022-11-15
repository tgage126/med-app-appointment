import React from "react";

class GetPatient extends React.Component {
   
    // Constructor 
    constructor(props) {
        super(props);
   
        this.state = {
            items: [],
            DataisLoaded: false
        };
    }
   
    // ComponentDidMount is used to
    // execute the code
    componentDidMount() {
        fetch(
"http://localhost:3001/patient/all/2")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }
    render() {
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Pleses wait some time.... </h1> </div> ;
   
        return (
        <div className = "GetPatient">
            <h1> Fetch data from an api in react </h1>  {
                items.map((patient) => ( 
                <ol key = { patient.patient_id } >
                    Last_Name: { patient.name_last }, 
                    First_Name: { patient.name_first }, 
                    
                    </ol>
                ))
            }
        </div>
    );
}
}
   
export default GetPatient;