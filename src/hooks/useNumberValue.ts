import { useState } from "react";

export default function useNumberValue(): [
    value: string,
    onValueChange: (value: string) => Promise<void>,
    errorMessage: string
] {

    const [value, setValue] = useState<string>('0')
    const [errorMessage, setErrorMessage] = useState<string>('')

    function onValueChange(value: string): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            const val = value == '' ? '' : value.replace(',', '.')
            let regex = new RegExp('^([0-9]*[.])?[0-9]+$')
            if (regex.test(val)) {
                setErrorMessage('')
                setValue(value)
                resolve()
            } else {
                setErrorMessage('Wrong number format')
                setValue(val)
                reject()
            }
        })
    }

    return [value, onValueChange, errorMessage]

}