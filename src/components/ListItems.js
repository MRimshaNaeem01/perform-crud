import React, { useEffect, useState } from 'react';
import { getData, deleteData } from '../../src/api';
import 'bootstrap/dist/css/bootstrap.min.css';

const ListItems = ({ onEdit }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await getData();
            setData(response.data);
        } catch (error) {
            console.error('something wenrs wrong ', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteData(id);
            fetchData(); 
        } catch (error) {
            console.error('something wenrs wrong ', error);
        }
    };

    console.log(data, "Dattaa")
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Country</th>
                    <th>State</th>
                    <th>Status</th>
                    <th>Orgaized_By</th>
                </tr>
            </thead>
            <tbody>
                {data?.data?.events?.data && (
                    data?.data?.events?.data?.map((data) => (
                        <tr key={data?.id}>
                            <td>{data?.id ?? '-'}</td>
                            <td>{data?.name ?? '-'}</td>
                            <td>{data?.description ?? '-'}</td>
                            <td>{data?.address ?? '-'}</td>
                            <td>{data?.city ?? '-'}</td>
                            <td>{data?.country ?? '-'}</td>
                            <td>{data?.state ?? '-'}</td>
                            <td>{data?.status ?? '-'}</td>
                            <td>{data?.organized_by.name ?? '-'}</td>

                            <td>
                                <button className="btn mb-1 w-100 btn-warning" onClick={() => onEdit(data)}>
                                    Edit Item
                                </button>
                                <button className="mb-1 w-100 btn btn-danger" onClick={() => handleDelete(data?.id)}>
                                    Delete Item
                                </button>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    
    );
};

export default ListItems;
