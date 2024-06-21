import { useEffect, useState } from "react";
import Suggestions from "./suggestions";

export default function SearchAutoComplete() {

    //const[loading, setLoading] = useState(false);
    const[users, setUsers] = useState([]);
    const[searchParam, setSearchParam] = useState("");
    const[showDropDown, setShowDropDown] = useState(false);
    const[filteredUsers, setFilteredUsers] = useState([]);


    const handleChange = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchParam(query);
        const filteredData = users && users.length
            ? users.filter(item => item.toLowerCase().indexOf(query) > -1)
            : [];
        if (filteredData) {
            setFilteredUsers(filteredData);
            setShowDropDown(true);
        }

    }

    const handleClick = (event) => {
        console.log(event.target.innerText);
        setShowDropDown(false);
        setSearchParam(event.target.innerText);
        setFilteredUsers([]);
    }

    const fetchListOfUsers = () => {
        fetch('https://dummyjson.com/users?limit=10000')
        .then(res => {
            const data = res.json();
            return data;
        }).then(data => {
            //console.log(data);
            if (data && data.users && data.users.length) {
                setUsers(data.users.map(user => user.firstName));
            }
        })
        .catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        fetchListOfUsers();
    }, []);

    console.log(users, filteredUsers);

    return (
        <div className="search-container">
            <input type="text" 
            name="search-users" 
            placeholder="Search users"
            value={searchParam}
            onChange={handleChange}
            />
            {
                showDropDown && <Suggestions handleClick={handleClick} data={filteredUsers} />
            }
        </div>
    );
}