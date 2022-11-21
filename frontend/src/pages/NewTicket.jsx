import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {createTicket, reset} from '../features/tickets/ticketSlice'
import Spinner from '../components/Spinner'


function NewTicket() {
    const {user} = useSelector((state) => state.auth)
    const {isLoading, isError, isSuccess, message} = useSelector((state) => state.ticket)

    const [name] =  useState(user.name)
    const [email] =  useState(user.email)
    const [product, setProduct] =  useState('Iphone')
    const [description, setDescription] =  useState('')

    const dispatch = useDispatch()
    const navigate = useNavigate()
 
    useEffect(() => {
        if(isError) {
            toast.error(message)
        }
        if(isSuccess) {
            dispatch(reset())
            navigate('/tickets')
        }

        dispatch(reset())

    }, [dispatch, isError, isSuccess, navigate, message])

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(createTicket({product, description}))
    }

    if(isLoading) {
        return <Spinner />
    }
    
    
    return (

        
        <>
            <section className="heading">
                <h1>Create New Ticket</h1>
                <p>Please fill out the form below</p>
            </section>

            <section className="form">

                <div className="form-group">
                    <label htmlFor="name">Custome Name</label>
                    <input type="text" className="form-control" value={name} disabled />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Custome Email</label>
                    <input type="text" className="form-control" value={email} disabled />
                </div>

                <form onSubmit={onSubmit}>
                    <div className="form-group">
                        <label htmlFor="product">Product</label>
                        <select name="product" id="product" value={product} onChange={(e) => setProduct(e.target.value)}>
                            <option value="iPhone">Iphone</option>
                            <option value="iPhone">MacBoock</option>
                            <option value="iPhone">iMac</option>
                            <option value="iPhone">iPad</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea name='description' id='description' className='form-control' placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>

                    <div className='form-group'>
                        <button className='btn btn-block'>Submit</button>
                    </div>
                </form>

            </section>
        </>
    )
}

export default NewTicket