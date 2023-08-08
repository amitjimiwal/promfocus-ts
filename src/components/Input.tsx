export interface InputInterface {
  id: string;
  label?: string;
  type: string;
  name: string;
  min: number;
  value: number;
  onChange: () => void;
}

const Input = ({
  id,
  label,
  type,
  name,
  min,
  value,
  onChange,
}: InputInterface) => {
  return (
    <div className=" flex flex-col w-1/3 px-2 justify-center">
      {label && (
        <label htmlFor={id} className="text-gray-400">
          {label}
        </label>
      )}
      <input
        onChange={onChange}
        value={value}
        min={min}
        className="bg-settingscolor outline-none p-2"
        id={id}
        type={type}
        name={name}
      />
    </div>
  );
};

export default Input;
