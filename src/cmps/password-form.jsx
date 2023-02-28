import { StrengthBar } from "./strength-bar";

export function PasswordForm({ password, setPasswordLevel }) {

    function handleChange({ target }) {
        let { value, name: field, type } = target
        value = (type === 'range') ? +value : value
        setPasswordLevel((prevPasswordLevel) => ({ ...prevPasswordLevel, [field]: value }))
    }

    function MyInputStyleBgSize() {
        return {
            backgroundSize: `${password.length * 100 / 16}% 100%`
        }
    }


    return (
        <section className="password-form">
            <form >

                <div className="character-length">
                    <div className="character-length-headline flex">
                        <h4>Character Length</h4>
                        <h4 className="greenNeon">{password.length}</h4>
                    </div>
                    <div className="range-input">
                        <input style={MyInputStyleBgSize()} type="range" id="length" name="length" min="0" max="16" title={password.length} value={password.length} onChange={handleChange} />
                    </div>
                </div>

                <div className="input-type-check flex column">

                    <label>
                        <input type="checkbox" />
                        Include UpperCase Letters
                    </label>

                    <label>
                        <input type="checkbox" />
                        Include Lowercase Letters
                    </label>


                    <label>
                        <input type="checkbox" />
                        Include Numbers
                    </label>


                    <label>
                        <input type="checkbox" />
                        Include Symbols
                    </label>

                </div>

                <StrengthBar />


                <button className="generate-btn">
                    GENERATE
                    <span className="arrow">
                        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z" /></svg>
                    </span>
                </button>
            </form>
        </section>
    )
}