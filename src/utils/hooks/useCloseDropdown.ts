import { useCallback, useEffect, useRef, type RefObject } from "react";

interface UseCloseDropdownOptions {
  closeOutside?: boolean;
  closeEsc?: boolean;
}

interface useCloseDropdownProps<T extends HTMLElement> {
  setOpen?: (status: boolean) => void;
  buttonRef?: RefObject<HTMLButtonElement>;
  options?: UseCloseDropdownOptions;
}

export const useCloseDropdown = <T extends HTMLElement>({
  setOpen,
  buttonRef,
  options,
}: useCloseDropdownProps<T>) => {
  const dropdownRef = useRef<T>(null); // Generic ref

  const handleKeyUp = useCallback(
    (e: KeyboardEvent) => {
      if (options?.closeEsc && (e.key === "Escape" || e.key === "Esc")) {
        if (setOpen) {
          setOpen(false);
        }
      }
    },
    [setOpen, options?.closeEsc],
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        options?.closeOutside &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        (!buttonRef?.current ||
          !buttonRef.current.contains(event.target as Node))
      ) {
        if (setOpen) {
          setOpen(false);
        }
      }
    };

    if (options?.closeOutside) {
      window.addEventListener("mousedown", handleClickOutside);
    }
    if (options?.closeEsc) {
      window.addEventListener("keyup", handleKeyUp);
    }

    return () => {
      if (options?.closeOutside) {
        window.removeEventListener("mousedown", handleClickOutside);
      }
      if (options?.closeEsc) {
        window.removeEventListener("keyup", handleKeyUp);
      }
    };
  }, [setOpen, handleKeyUp, buttonRef, options]);

  return { dropdownRef };
};
