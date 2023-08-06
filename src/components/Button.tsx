interface ButtonProps {
  className?: string;
  text: string;
}

export const Button = ({ text, className }: ButtonProps) => {
  return (
    <button className={`border-none cursor-pointer text-white p-2 ${className}`}>
      {text}
    </button>
  )
}