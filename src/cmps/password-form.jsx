import { StrengthBar } from "./strength-bar";

export function PasswordForm({ password, setPasswordLevel }) {

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = (type === 'range') ? +value : value
        setPasswordLevel((prevPasswordLevel) => ({ ...prevPasswordLevel, [field]: value }))
    }


    return (
        <section className="password-form">
            <form >
                <h2>form</h2>
                <div className="character-length">
                    <div className="flex">
                        <h4>Character Length</h4>
                        <h4 className="greenNeon">{password.length}</h4>
                    </div>
                    <div className="flex">
                        <input className="broly" type="range" id="length" name="length" min="0" max="16" title={password.length} value={password.length} onChange={handleChange}/>
                    </div>
                </div>
                <StrengthBar />
            </form>
        </section>
    )
}