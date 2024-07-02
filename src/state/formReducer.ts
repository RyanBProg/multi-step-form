export const formTemplate = {
  name: "",
  email: "",
  number: "",
  subscriptionType: "",
  addOns: [],
  currentStep: 1,
};

export type UserFormData = {
  name: string;
  email: string;
  number: string;
  subscriptionType: string;
  addOns: string[];
  currentStep: number;
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

export type Action = {
  type: ActionType;
  payload: string;
};

export function formReducer(state: UserFormData, action: Action) {
  switch (action.type) {
    case "name_changed":
      return { ...state, name: action.payload };
    case "email_changed":
      return { ...state, email: action.payload };
    case "number_changed":
      return { ...state, number: action.payload };
    case "subscription_changed":
      return { ...state, subscriptionType: action.payload };
    case "addOn_removed":
      const newAddOns = state.addOns.filter(
        (addOn) => addOn !== action.payload
      );
      return { ...state, addOns: [...newAddOns] };
    case "addOn_added":
      if (state.addOns.includes(action.payload as string)) {
        return state;
      } else {
        return { ...state, addOns: [...state.addOns, action.payload] };
      }
    case "increased_step":
      return { ...state, currentStep: state.currentStep + 1 };
    case "decreased_step":
      return { ...state, currentStep: state.currentStep - 1 };
    default:
      return state;
  }
}
