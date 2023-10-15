export type ButtonType =
  | "default"
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info";
export type ButtonSize = "large" | "small";
export type NativeType = "button" | "submit" | "reset";

export interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  plain?: boolean;
  disabled?: boolean;
  nativeType?: NativeType;
  autofocus?: boolean;
}

export interface ButtonInstance {
  ref: HTMLButtonElement;
}
