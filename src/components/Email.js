import { useState } from "react"
import { send } from 'emailjs-com';



const Email = () => {

    const [toSend, setToSend] = useState({
        from_name: '',
        message: '',
        phone_number: '',
        reply_to: '',
    });

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_dif4o5e',
            'template_s28uu0s',
            toSend,
            '2EIo5R61P4ndAaHoH'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                setToSend({
                    from_name: '',
                    message: '',
                    phone_number: '',
                    reply_to: '',
                })
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
    };

    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (


        <div className="contactForm">
            <form action="" onSubmit={onSubmit}>
                <div>
                    <label htmlFor="from_name">Name:</label>
                    <input type="text"
                        name='from_name'
                        placeholder=' Name'
                        required
                        value={toSend.from_name}
                        onChange={handleChange} />
                </div>
                <div> <label htmlFor="message">Service:</label>
                    <input type="text" name='message'
                        required
                        placeholder=' Remodel, Repair etc ...'
                        value={toSend.message}
                        onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="phone_number">Phone Number: ex. 000-000-0000</label>
                    <input type="tel" name='phone_number'
                        required
                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        placeholder=' 000-000-0000'
                        value={toSend.phone_number}
                        onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="reply_to">Email:</label>
                    <input type="email" name='reply_to'
                        required
                        placeholder=' Email'
                        value={toSend.reply_to}
                        onChange={handleChange} />
                </div>
                <div className="contactd">
                    <button className="contactSubmit" type="submit">Contact us</button>
                </div>
            </form>
        </div>
    )
}

export default Email
