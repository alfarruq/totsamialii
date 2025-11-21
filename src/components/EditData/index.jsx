

import { Link, useNavigate, useParams } from 'react-router-dom';
import './style.css'
import { useEffect, useState } from 'react';




function EditData() {
    const [data, setData] = useState({
        name: '',
        img: [],
        price: null,
        count: null,
        sale: null,

    })

    let navigate = useNavigate()

    const { id } = useParams()

    useEffect(() => {
        async function get() {
            let response = await fetch(`https://66f68256436827ced9776af5.mockapi.io/market/${id}`)
            let data = await response.json()
            setData(data)
        }
        get()
    }, [])




    async function postProduct() {
        let response = await fetch('https://66f68256436827ced9776af5.mockapi.io/market/' + id, {
            method: 'PUT',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })

        if (response.ok) {
            alert(`ma'lumot qoshildi`)
            navigate('/')

        }
        else {
            alert(`nimadir xato`)
        }
    }



    return (
        <div className='adddata' >
            <Link to={'/'} >
                <button>Back</button>
            </Link>
            <h2>Edit Member</h2>

            <div className="datas">
                <input required value={data?.name} onChange={(e) => setData({ ...data, name: e.target.value })} placeholder='name' type="text" />
                <input value={data?.img} onChange={(e) => setData({ ...data, img: [e.target.value] })} placeholder='img url' type="text" />
                <input value={data?.price} onChange={(e) => setData({ ...data, price: e.target.value })} placeholder='price' type="text" />
                <input value={data?.count} onChange={(e) => setData({ ...data, count: e.target.value })} placeholder='count' type="text" />
                <input value={data?.sale} onChange={(e) => setData({ ...data, sale: e.target.value })} placeholder='sale' type="text" />
                <button onClick={postProduct} >Edit data</button>
            </div>
        </div>
    );
}

export default EditData;