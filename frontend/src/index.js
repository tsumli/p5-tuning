import React from "react";
import { createRoot } from "react-dom/client";
import axios from "axios"


const App = (props) => {
    const [data, setData] = React.useState(null);
    const axiosBase = axios.create(
        {
            baseURL: 'http://0.0.0.0:8080',
            headers: {
                'Content-Type': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
            },
            responseType: 'json'  
        }
    );

    React.useEffect(() => {
        axiosBase.get(
            '/', { params: {}}
        ).then(response => {
            setData(response.data.message)
        }).catch(error => {
            setData("Error")
            console.log(error)
        })
    }, []);

    return (
        <div> {data} </div>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
