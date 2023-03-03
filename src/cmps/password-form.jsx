import { passwordService } from "../services/password.service";
import { StrengthBar } from "./strength-bar";

export function PasswordForm({ password, setPasswordLevel }) {

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = (type === 'range') ? +value : value
        setPasswordLevel((prevPassword) => ({ ...prevPassword, [field]: value }))
    }

    function MyInputStyleBgSize() {
        return {
            backgroundSize: `${password.length * 100 / 24}% 100%`
        }
    }

    function handleCheckBox(e) {
        const idx = password.optionsForPassword.indexOf(e.target.value)
        idx >= 0 ? password.optionsForPassword.splice(idx, 1) : password.optionsForPassword.push(e.target.value)
        fixLevelForPassword()

    }

    function onCreatePassword(e) {
        e.preventDefault()
        const newpassword = passwordService.generatePass(password.length, password.optionsForPassword)
        console.log(newpassword)
        setPasswordLevel((prevPassword) => ({ ...prevPassword, outCome: newpassword }))
    }

    function fixLevelForPassword() {
        switch (password.optionsForPassword.length) {
            case 1:
                setPasswordLevel((prevPassword) => ({ ...prevPassword, level: 'TOO WEAK!' }))
                break
            case 2:
                setPasswordLevel((prevPassword) => ({ ...prevPassword, level: 'WEAK' }))
                break
            case 3:
                setPasswordLevel((prevPassword) => ({ ...prevPassword, level: 'MEDIUM' }))
                break
            case 4:
                setPasswordLevel((prevPassword) => ({ ...prevPassword, level: 'STRONG' }))
                break
        }
    }

    return (
        <section className="password-form">
            <form onSubmit={onCreatePassword}>

                <div className="character-length">
                    <div className="character-length-headline flex">
                        <h4>Character Length</h4>
                        <h4 className="greenNeon">{password.length}</h4>
                    </div>
                    <div className="range-input">
                        <input style={MyInputStyleBgSize()} type="range" id="length" name="length" min="0" max="24" title={password.length} value={password.length} onChange={handleChange} />
                    </div>
                </div>

                <div className="input-type-check flex column">

                    <label>
                        <input
                            type="checkbox"
                            name="upperCase"
                            value={password.upperCase}
                            onChange={handleCheckBox}
                        />
                        Include Upper Case Letters
                    </label>

                    <label>
                        <input type="checkbox" name="lowerCase" value={password.lowerCase} onChange={handleCheckBox} />
                        Include Lower Case Letters
                    </label>


                    <label>
                        <input type="checkbox" name="numbers" value={password.numbers} onChange={handleCheckBox} />
                        Include Numbers
                    </label>


                    <label>
                        <input type="checkbox" name="symbols" value={password.symbols} onChange={handleCheckBox} />
                        Include Symbols
                    </label>

                </div>

                <StrengthBar password={password} />

                <button className="generate-btn">
                    GENERATE
                    <span className="arrow">
                        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" /></svg>
                    </span>
                </button>
            </form>
        </section >
    )
}
