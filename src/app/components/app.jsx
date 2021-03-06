import React, { useEffect, useState } from 'react';
import Loader from './loader';

// Implementando redux
import { connect } from 'react-redux';

const App = ({dataUsers, loader, setDataUsers, setLoader}) => {
    
    useEffect(() => {
        fetchData();
    },[])
    
    const extractData = (data) => {
        var extract = [];
        data.forEach(elem => {
            let newElem = {id:"",username:"",email:"",phone:"",company:""}
            newElem.id = elem.id;
            newElem.username = elem.username;
            newElem.email = elem.email;
            newElem.phone = elem.phone;
            newElem.company = elem.company.name;
            extract.push(newElem);
        });
        return extract;
    }

    const fetchData = async () => {
        try {
            let data = await fetch('https://jsonplaceholder.typicode.com/users?_limit=10');
            let dataParse = await data.json();
            let resolve = extractData(dataParse);
            setDataUsers(resolve);
            setLoader(false);
        } catch (error) {
            console.log(error.message);
            setLoader(true);
        }
    }


    const printfTableBody = () => {
        return dataUsers.map((elem,i) => (
            <tr key={i} className="text-center">
                <td>{elem.id}</td>
                <td>{elem.username}</td>
                <td>{elem.email}</td>
                <td>{elem.phone}</td>
                <td>{elem.company}</td>
            </tr>
        ));
    }

    const render = () => {
        if(loader){
            return <Loader/>
        }

        return(
            <table className="table table-bordered">
                <thead className="text-center bg-dark" style={{color: "white",fontSize: "15px"}}>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Company</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        printfTableBody()
                    }
                </tbody>
            </table>
        )
    }

    return render();
}

const mapStateToProps = state => ({
    dataUsers: state.dataUsers,
    loader: state.loader
})

const mapDispatchToProps = dispatch => ({

    setDataUsers: data => {
        dispatch({
            type: "SET_DATA_USERS",
            data
        })
    },

    setLoader: stateLoader => {
        dispatch({
            type: "SET_LOADER",
            stateLoader
        })
    }

})

export default connect(mapStateToProps,mapDispatchToProps)(App);