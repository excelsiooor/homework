import React from "react";

const Form = props => (
    <div>
        <form onSubmit={props.weatherMethod}>
            <input type="text" name="city" placeholder="City" />
            <button>Get Weather</button>
        </form>
    </div>
)

export default Form;