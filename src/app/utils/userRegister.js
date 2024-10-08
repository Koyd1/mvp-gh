"use client";
import React, { useRef } from "react";
import { redirect } from "next/navigation";
import { firebase } from "../../../mvp-gh/src/app/utils/firebaseConfig";
import { addDoc, collection } from "@firebase/firestore";

export default function RegisterPage() {
    // const [data, setData] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    const firstNameRef = useRef();
    const lastNameRef = useRef();
    const patronRef = useRef();
    const phoneRef = useRef();
    const birthDateRef = useRef();
    const idRef = useRef();
    const passRef = useRef();

    const ref = collection(firebase, "users");

    const createUser = async (e) => {
        e.preventDefault();

        let data = {
            firstName: firstNameRef.current.value,
            lastName: lastNameRef.current.value,
            patronymic: patronRef.current.value,
            phoneNumber: phoneRef.current.value,
            dateOfBirth: birthDateRef.current.value,
            idPatient: idRef.current.value,
            password: passRef.current.value,
        };

        try {
            await addDoc(ref, data);
        } catch (error) {
            console.log(error);
        }

        redirect(`/login`);
    };

    return (
        <div>
            <h1>Register</h1>
            <div>
                <form onSubmit={createUser}>
                    <p>First Name</p>
                    <input className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" name="firstName" type="text" ref={firstNameRef} required />
                    <p>Last Name</p>
                    <input name="lastName" type="text" ref={lastNameRef} required />
                    <p>Patronymic</p>
                    <input name="patron" type="text" ref={patronRef} required />
                    <p>Phone Number</p>
                    <input name="phone" type="text" ref={phoneRef} required />
                    <p>Date of Birth</p>
                    <input name="birthDate" type="text" ref={birthDateRef} required />
                    <p>ID</p>
                    <input name="id" type="text" ref={idRef} required />
                    <p>Password</p>
                    <input name="password" type="password" ref={passRef} required />
                    <br />
                    <button type="submit">Register</button>
                </form>
            </div>
        </div>
    );
}
