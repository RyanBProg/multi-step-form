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
  planType: string;
  addOns: string[];
  currentStep: number;
  formComplete: boolean;
};

const initialState: StateType = {
  name: "",
  email: "",
  number: "",
  subscriptionType: "monthly",
  planType: "arcade",
  addOns: [],
  currentStep: 1,
  formComplete: false,
};

type ActionType =
  | "user_data_submitted"
  | "subscription_monthly"
  | "subscription_annual"
  | "plan_changed"
  | "addOn_removed"
  | "addOn_added"
  | "increased_step"
  | "decreased_step"
  | "form_completed";

type UserPayload = {
  name: string;
  email: string;
  number: string;
};

type Action = {
  type: ActionType;
  payload?: string | UserPayload;
};

export function formReducer(state: StateType, action: Action): StateType {
  switch (action.type) {
    case "user_data_submitted":
      if (typeof action.payload !== "object" || action.payload === null)
        return state;
      const userPayload = action.payload as UserPayload;
      return {
        ...state,
        name: userPayload.name,
        email: userPayload.email,
        number: userPayload.number,
        currentStep: state.currentStep + 1,
      };

    case "subscription_annual":
      return { ...state, subscriptionType: "annual" };

    case "subscription_monthly":
      return { ...state, subscriptionType: "monthly" };

    case "plan_changed":
      if (typeof action.payload !== "string") return state;
      return { ...state, planType: action.payload };

    case "addOn_removed":
      if (typeof action.payload !== "string") return state;
      const newAddOns = state.addOns.filter(
        (addOn) => addOn !== action.payload
      );
      return { ...state, addOns: newAddOns };

    case "addOn_added":
      if (typeof action.payload !== "string") return state;
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

    case "form_completed":
      return { ...state, formComplete: true };

    default:
      return state;
  }
}

interface FormContextType extends StateType {
  dispatch: Dispatch<Action>;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

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
    throw new Error("useFormContext must be used within a FormProvider");
  }

  return context;
}
