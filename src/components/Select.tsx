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
      <label className="block text-sm font-medium mb-2 text-mage-gold-600">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full px-4 py-3 rounded-lg border border-mage-gold-800/30 bg-mage-purple-900/60 text-mage-gold-500 transition-colors hover:border-mage-gold-700/50 focus:outline-none focus:ring-2 focus:ring-mage-gold-700/40"
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
