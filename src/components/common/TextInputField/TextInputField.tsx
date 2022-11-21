import {UseFormRegisterReturn} from "react-hook-form";

interface Props {
    type: string
    validation: UseFormRegisterReturn
    error: any
    placeholder: string

}

export const TextInputField = ({type, validation, error, placeholder}: Props) => (
    <label>
        <input
            type={type}
            {...validation}
            placeholder={placeholder}
        />
        {error ? <div>{error.message}</div> : null}
    </label>
)
