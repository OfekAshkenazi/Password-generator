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
                    <div className="flex">
                        <h4>Character Length</h4>
                        <h4 className="greenNeon">{password.length}</h4>
                    </div>
                    <div className="range-input">
                        <input style={MyInputStyleBgSize()} type="range" id="length" name="length" min="0" max="16" title={password.length} value={password.length} onChange={handleChange} />
                    </div>
                </div>
                <div className="type-check flex">
                    <label>
                        <input type="checkbox" />
                        Include UpperCase Letters
                    </label>
                </div>
                <div className="type-check flex">
                    <label>
                        <input type="checkbox" />
                        Include Lowercase Letters
                    </label>
                </div>
                <div className="type-check flex">
                    <label>
                        <input type="checkbox" />
                        Include Numbers
                    </label>
                </div>
                <div className="type-check flex">
                    <label>
                        <input type="checkbox" />
                        Include Symbols
                    </label>
                </div>
                <StrengthBar />
                <button className="generate-btn">GENERATE</button>
            </form>
        </section>
    )
}