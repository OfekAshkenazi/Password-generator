import { useState, useEffect } from "react";
import { PasswordForm } from "../cmps/password-form";
import { PasswordPreview } from "../cmps/password-preview";
import { passwordService } from "../services/password.service";

export function HomePage() {

    const [password, setPasswordLevel] = useState(passwordService.getEmptyPassword())

    useEffect(() => {
        console.log('state change')
    }, [])


    return (
        <section className="home-page">
            <h4>Password Generator</h4>
            <PasswordPreview password={password}/>
            <PasswordForm password={password} setPasswordLevel={setPasswordLevel}/>
        </section>
    )
}