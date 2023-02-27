import { useState, useEffect } from "react";
import { PasswordForm } from "../cmps/password-form";
import { PasswordPreview } from "../cmps/password-preview";
import { passwordService } from "../services/password.service";

export function HomePage() {
    const [password, setPasswordLevel] = useState(passwordService.getEmptyPassword())

    useEffect(() => {
        console.log(password)
    }, [])


    return (
        <section className="password-generetor">
            <PasswordPreview />
            <PasswordForm password={password} setPasswordLevel={setPasswordLevel}/>
        </section>
    )
}