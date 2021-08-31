import { useState } from "react";

export default function useNumberValue(): [
    value: string,
    onValueChange: (value: string) => Promise<void>,
    errorMessage: string
] {

    const [value, setValue] = useState<string>('0')
    const [errorMessage, setErrorMessage] = useState<string>('')

    function onValueChange(value: string): Promise<void> {

        // Return promise to be able to execute code after value has changed
        return new Promise<void>((resolve, reject) => {
            // Remplace ',' with '.' for US agreements
            const val = value == '' ? '' : value.replace(',', '.')
            let regex = new RegExp('^([0-9]*[.])?[0-9]+$')
            if (regex.test(val)) {
                setErrorMessage('')
                setValue(value)
                resolve()
            } 
            // Value is not a correct number
            else {
                setErrorMessage('Wrong number format')
                // Set Value because user need to see the value even if it's incorrect
                setValue(val)
                // Reject the promise
                reject()
            }
        })
    }

    return [value, onValueChange, errorMessage]

}