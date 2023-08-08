// this is a higher order component In React
interface props {
  children: React.ReactNode;
  OnClick: () => void;
}
const Button = ({ children, OnClick }: props) => {
  return (
    <div
      className="flexproperty  gap-2  p-2 bg-bgbutton w-32  rounded-xl text-white text-xl cursor-pointer"
      onClick={OnClick}
    >
      {children}
    </div>
  );
};

export default Button;
