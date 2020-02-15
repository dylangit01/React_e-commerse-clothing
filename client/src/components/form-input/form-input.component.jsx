import React from "react";
import './form-input.styles.scss'

const FormInput = ({handleChange, label, ...otherProps}) => (
    <div className='group'>
        <input className='form-input' onChange={handleChange} {...otherProps}/>
        {
            label ?         // this label is referring any input tag which has label props of sign-in component, so it means this component may have label, maynot have label.
                (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}
                >
                    {label}
                </label>)
                : null
        }
    </div>
);

export default FormInput
