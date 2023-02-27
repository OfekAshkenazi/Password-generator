import { useState, useEffect } from "react";
import { PasswordForm } from "../cmps/password-form";
import { PasswordPreview } from "../cmps/password-preview";
import { numbers } from "../services/password.service";

export function HomePage() {
    const [password, setPasswordLevel] = useState(numbers)

    useEffect(() => {
        console.log(password)
    }, [])


    return (
        <section className="password-generetor">
            <PasswordPreview />
            <PasswordForm />
        </section>
    )
}