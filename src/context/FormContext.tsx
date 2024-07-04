import {
  useContext,
  createContext,
  ReactNode,
  useReducer,
  Dispatch,
} from "react";

type StateType = {
  name: string;
  email: string;
  number: string;
  subscriptionType: string;
  addOns: string[];
  currentStep: number;
};

const initialState: StateType = {
  name: "",
  email: "",
  number: "",
  subscriptionType: "",
  addOns: [],
  currentStep: 1,
};

type ActionType =
  | "name_changed"
  | "email_changed"
  | "number_changed"
  | "subscription_changed"
  | "addOn_removed"
  | "addOn_added"
  | "increased_step"
  | "decreased_step";

type Action = {
  type: ActionType;
  payload?: string;
};

export function formReducer(state: StateType, action: Action) {
  switch (action.type) {
    case "name_changed":
      if (action.payload === undefined) return state;
      return { ...state, name: action.payload };

    case "email_changed":
      if (action.payload === undefined) return state;
      return { ...state, email: action.payload };

    case "number_changed":
      if (action.payload === undefined) return state;
      return { ...state, number: action.payload };

    case "subscription_changed":
      if (action.payload === undefined) return state;
      return { ...state, subscriptionType: action.payload };

    case "addOn_removed":
      if (action.payload === undefined) return state;
      const newAddOns = state.addOns.filter(
        (addOn) => addOn !== action.payload
      );
      return { ...state, addOns: [...newAddOns] };

    case "addOn_added":
      if (action.payload === undefined) return state;
      if (state.addOns.includes(action.payload)) {
        return state;
      } else {
        return { ...state, addOns: [...state.addOns, action.payload] };
      }

    case "increased_step":
      if (state.currentStep === 4) {
        return state;
      }
      return { ...state, currentStep: state.currentStep + 1 };

    case "decreased_step":
      return { ...state, currentStep: state.currentStep - 1 };

    default:
      return state;
  }
}

interface FormContextType extends StateType {
  dispatch: Dispatch<Action>;
}

export const FormContext = createContext<FormContextType | undefined>(
  undefined
);

type Props = {
  children: ReactNode;
};

export default function FormProvider({ children }: Props) {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <FormContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("FormContext must be used within a FormProvider");
  }

  return context;
}
