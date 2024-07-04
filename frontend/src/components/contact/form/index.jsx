import React from "react";

import "./style.scss";

import { send } from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        send("service_z3fekdl", "template_w73fx3t", data, "zPZsuh3t9Qihrz_3C")
            .then((response) => {
                console.log("Sucess", response.status, response.text);
                formSuccess();
            })
            .catch((err) => console.log("error Occured", err));
    };

    const formSuccess = () => {
        toast("Thanks For Submitting Your Query");
        document.getElementById("query-form").reset();
    };
    return (
        <div className="query-form">
            <ToastContainer />
            <form
                id="query-form"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="input-feild">
                    <input
                        type="text"
                        name="from_name"
                        placeholder="Enter Your Name"
                        {...register("from_name", {
                            required: "Name Is Required",
                        })}
                    />

                    {errors.from_name?.message && (
                        <p>{errors.from_name?.message}</p>
                    )}
                </div>

                <div className="input-feild">
                    <input
                        type="text"
                        name="reply_to"
                        placeholder="Enter Your Email"
                        {...register("reply_to", {
                            required: "Email Is Required",
                        })}
                    />
                    {errors.reply_to?.message && (
                        <p>{errors.reply_to?.message}</p>
                    )}
                </div>

                <div className="input-feild">
                    <input
                        type="text"
                        name="phone_number"
                        placeholder="Phone NNumber"
                        {...register("phone_number", {
                            required: "Phone Number Is Required",
                            minLenght: {
                                value: 8,
                                message: "Invalid Phone Number",
                            },
                        })}
                    />
                    {errors.phone_number?.message && (
                        <p>{errors.phone_number?.message}</p>
                    )}
                </div>

                <div className="input-feild">
                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        {...register("subject", {
                            required: "Subject Is Required",
                            minLenght: {
                                value: 10,
                                message: "Subject Is too short",
                            },
                        })}
                    />
                    {errors.subject?.message && (
                        <p>{errors.subject?.message}</p>
                    )}
                </div>

                <div className="input-feild full-width">
                    <textarea
                        className="text-area"
                        name="message"
                        placeholder="message"
                        {...register("message", {
                            required: "Message Is Required",
                            minLenght: {
                                value: 120,
                                message: "Message Is too short",
                            },
                            maxLenght: {
                                value: 1500,
                                message: "Message Is too long",
                            },
                        })}
                    />
                    {errors.message?.message && (
                        <p>{errors.message?.message}</p>
                    )}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
