type SelectOption = {
  value: string;
  label: string;
};

type SelectProps = {
  label: string;
  options: SelectOption[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function Select({
  label,
  options,
  value,
  onChange,
  placeholder = "Select an option",
}: SelectProps) {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium mb-2 text-foreground">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-lg border border-black/[.08] dark:border-white/[.145] bg-background text-foreground transition-colors hover:border-black/[.15] dark:hover:border-white/[.25] focus:outline-none focus:ring-2 focus:ring-foreground/20"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
