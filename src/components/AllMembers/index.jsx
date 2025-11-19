import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



function AllMembers() {

    const [data, setData] = useState([])
    const [deleteP, setDelete] = useState(false)

    useEffect(() => {
        async function get() {
            let response = await fetch('https://66f68256436827ced9776af5.mockapi.io/market')
            setData(await response.json())
        }
        get()
    }, [deleteP])


    async function deleteProduct(id) {
        let response = await fetch(`https://66f68256436827ced9776af5.mockapi.io/market/${id}`, {
            method: 'DELETE',
        })

        if (response.ok) {
            alert(`ma'lumot yoq qilindi`)
            setDelete(!deleteP)
        }
        else {
            alert(`nimadir xato`)
        }
    }



    return (
        <>
            <div className="card-header">
                <div>
                    <h2>All Customers
                        <Link to={'/addmember'} ><button> Add Member</button></Link> </h2>
                    <p>Active Members</p>
                </div>
                <input type="text" placeholder="Search" className="search small" />
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Picture</th>
                        <th>Barnd</th>
                        <th>Price</th>
                        <th>Count</th>
                        <th>Sotildi</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.map((c) => (
                        <tr key={c.id}>
                            <td>{c.name}</td>
                            <td>  <img src={c.img[0]} alt="" /> </td>
                            <td>{c.brand}</td>
                            <td>{c.price}$</td>
                            <td>{c.count}</td>
                            <td>{c.price_count}</td>
                            <td style={{ display: 'flex', gap: '16px' }} >
                                <button style={{ border: 'none' }} className="status active" >Edit</button>
                                <button onClick={() => deleteProduct(c.id)} style={{ border: 'none' }} className="status inactive"  >Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>


        </>
    );
}

export default AllMembers;



