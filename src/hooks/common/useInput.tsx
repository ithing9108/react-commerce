import { ChangeEvent, ChangeEventHandler, useState, useCallback, Dispatch, SetStateAction } from 'react';

interface useInputProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  setValue: Dispatch<SetStateAction<string>>;
  isValid: boolean;
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>;
}
function useInput(initialValue: string, validator?: RegExp): useInputProps {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(true);
  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (validator) {
        const result = validator.test(e.currentTarget.value);
        setIsValid(result);
      }
      setValue(e.currentTarget.value);
    },
    [validator],
  );
  return { value, onChange, setValue, isValid, setIsValid };
}

export default useInput;
