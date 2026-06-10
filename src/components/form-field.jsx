"use client";

import { cn } from "@/utils/cn";

/**
 * FormField — accessible labeled input/textarea/select with consistent styling.
 *
 *   label, id, type, required, error, hint, children (custom input),
 *   plus all input props.
 */
const baseInput =
  "block w-full rounded-2xl border border-plum-500/15 bg-paper px-4 py-3 text-base text-ink placeholder:text-ink/35 transition-colors duration-300 focus:border-plum-500 focus:outline-none focus:ring-2 focus:ring-plum-500/20";

const FormField = ({
  label,
  id,
  type = "text",
  required = false,
  error = "",
  hint = "",
  className = "",
  inputClassName = "",
  children,
  ...rest
}) => {
  const inputId = id || rest.name;
  const describedBy = [
    error ? `${inputId}-error` : null,
    hint ? `${inputId}-hint` : null,
  ]
    .filter(Boolean)
    .join(" ") || undefined;

  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <label
        htmlFor={inputId}
        className="font-mono text-[10px] uppercase tracking-[0.28em] text-ink/60"
      >
        {label}
        {required && <span className="ml-1 text-plum-500">*</span>}
      </label>

      {children ? (
        children
      ) : type === "textarea" ? (
        <textarea
          id={inputId}
          required={required}
          aria-required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          rows={5}
          className={cn(baseInput, "resize-y min-h-[120px]", inputClassName)}
          {...rest}
        />
      ) : type === "select" ? (
        <select
          id={inputId}
          required={required}
          aria-required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={cn(baseInput, "appearance-none pr-10", inputClassName)}
          {...rest}
        />
      ) : (
        <input
          id={inputId}
          type={type}
          required={required}
          aria-required={required}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          className={cn(baseInput, inputClassName)}
          {...rest}
        />
      )}

      {hint && !error && (
        <p
          id={`${inputId}-hint`}
          className="font-mono text-[10px] uppercase tracking-[0.22em] text-ink/55"
        >
          {hint}
        </p>
      )}
      {error && (
        <p
          id={`${inputId}-error`}
          role="alert"
          className="font-mono text-[10px] uppercase tracking-[0.22em] text-plum-500"
        >
          {error}
        </p>
      )}
    </div>
  );
};

export default FormField;
