import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Container from '../Container';
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";
import { HiLocationMarker } from "react-icons/hi";

const Contact = () => {
    const [setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        // Mapping the input IDs to our state keys
        const key = id.replace('f-', '');
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    // Email JSSS

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_ahg6d5p', 'template_79x3qyw', form.current, {
                publicKey: 'rC2OuUPjCYkBUejd-',
            })
            .then(
                () => {
                    alert('SUCCESS!');
                },
                (error) => {
                    alert('FAILED..', error.text);
                },
            );
    };

    return (
        <section id="contact" className="py-[90px] bg-white">
            {/* Custom Animation Style for the Green Dot */}

            <Container>
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="block text-[12px] font-bold tracking-[3px] uppercase text-primary mb-2.5">
                        Get in Touch
                    </span>
                    <h2
                        className="font-pop font-extrabold text-gray-800 leading-tight text-[clamp(30px,4vw,46px)]"
                    >
                        Any Questions? Feel Free<br />to Contact
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-[60px] items-center">

                    {/* Left Info Card */}
                    <div className="bg-gray-50 rounded-[28px] p-11">
                        <h3 className="font-pop text-2xl font-extrabold mb-2.5">
                            Let's Work Together
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed mb-8">
                            Have a project in mind? I'd love to hear about it. Send me a
                            message and I'll get back to you as soon as possible.
                        </p>

                        <div className="flex flex-col">
                            {/* Email Address */}
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-[46px] h-[46px] bg-primary/10 text-primary rounded-[14px] flex items-center justify-center text-2xl shrink-0">
                                    <IoIosMail />
                                </div>
                                <div>
                                    <div className="text-[11px] text-gray-500 mb-0.5 uppercase tracking-wide">Email Address</div>
                                    <div className="font-semibold text-sm text-gray-800">mr.nabil.dev@gmail.com</div>
                                </div>
                            </div>

                            {/* Phone Number */}
                            <div className="flex items-center gap-4 mb-5">
                                <div className="w-[46px] h-[46px] bg-primary/10 text-primary rounded-[14px] flex items-center justify-center text-lg shrink-0">
                                    <FaPhone />
                                </div>
                                <div>
                                    <div className="text-[11px] text-gray-500 mb-0.5 uppercase tracking-wide">Phone Number</div>
                                    <div className="font-semibold text-sm text-gray-800">+880 1791-655368</div>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-center gap-4">
                                <div className="w-[46px] h-[46px] bg-primary/10 text-primary rounded-[14px] flex items-center justify-center text-2xl shrink-0">
                                    <HiLocationMarker />
                                </div>
                                <div>
                                    <div className="text-[11px] text-gray-500 mb-0.5 uppercase tracking-wide">Location</div>
                                    <div className="font-semibold text-sm text-gray-800">Dhaka, Bangladesh</div>
                                </div>
                            </div>
                        </div>

                        {/* Status Badge */}
                        <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 text-[13px] font-semibold px-[18px] py-2 rounded-full mt-7 border border-green-100">
                            <span
                                className="w-2 h-2 bg-green-500 rounded-full"
                                style={{ animation: 'blinkDot 1.5s ease-in-out infinite' }}
                            />
                            Available for Freelance Work
                        </div>
                    </div>

                    {/* Right Form */}
                    <form ref={form} onSubmit={sendEmail}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block font-semibold text-[13px] mb-1.5 text-gray-700">Your Name *</label>
                                <input
                                    type="text" name="user_name"
                                    id="f-name"
                                    required
                                    placeholder="Enter your name"
                                    className="w-full px-4 py-3 rounded-[14px] border-[1.5px] border-gray-200 bg-gray-50 font-pop text-sm text-gray-800 outline-none transition focus:border-primary focus:bg-white focus:shadow-[0_0_0_3px_rgba(108,92,231,.1)]"
                                    onChange={handleChange}
                                />
                            </div>
                            <div>
                                <label className="block font-semibold text-[13px] mb-1.5 text-gray-700">Email Address *</label>
                                <input
                                    name="user_email"
                                    id="f-email"
                                    type="email"
                                    required
                                    placeholder="Enter your email"
                                    className="w-full px-4 py-3 rounded-[14px] border-[1.5px] border-gray-200 bg-gray-50 font-pop text-sm text-gray-800 outline-none transition focus:border-primary focus:bg-white focus:shadow-[0_0_0_3px_rgba(108,92,231,.1)]"
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div className="mb-4">
                            <label className="block font-semibold text-[13px] mb-1.5 text-gray-700">Subject</label>
                            <input
                                id="f-subject"
                                type="text"
                                placeholder="Enter your subject"
                                className="w-full px-4 py-3 rounded-[14px] border-[1.5px] border-gray-200 bg-gray-50 font-pop text-sm text-gray-800 outline-none transition focus:border-primary focus:bg-white focus:shadow-[0_0_0_3px_rgba(108,92,231,.1)]"
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block font-semibold text-[13px] mb-1.5 text-gray-700">Message *</label>
                            <textarea
                                name="message"
                                id="f-message"
                                required
                                placeholder="Enter your message"
                                className="w-full px-4 py-3 rounded-[14px] border-[1.5px] border-gray-200 bg-gray-50 font-pop text-sm text-gray-800 outline-none transition focus:border-primary focus:bg-white focus:shadow-[0_0_0_3px_rgba(108,92,231,.1)] resize-none h-[130px]"
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button
                            type="submit" value="Send"
                            className="w-full mt-5 mx-auto py-3.5 bg-primary text-white rounded-[14px] font-pop text-[15px] font-bold cursor-pointer transition-all flex items-center justify-center gap-2 border-3 border-primary hover:border-indigo-200 hover:bg-transparent hover:text-primary duration-300"
                        >
                            Send Message
                        </button>
                    </form>

                </div>
            </Container>
        </section>
    );
};

export default Contact;