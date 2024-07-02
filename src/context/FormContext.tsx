import { createContext, ReactNode, useReducer, Dispatch } from "react";
import {
  formReducer,
  formTemplate,
  UserFormData,
  Action,
} from "../state/formReducer";

interface FormContextType extends UserFormData {
  dispatch: Dispatch<Action>;
}

type Props = {
  children: ReactNode;
};

export default function FormProvider({ children }: Props) {
  const [state, dispatch] = useReducer(formReducer, formTemplate);
  const FormContext = createContext<FormContextType | undefined>(undefined);

  return (
    <FormContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
}
