const typeStyles = {
  primary: 'bg-[#CCE5FF] border-[#B8DAFF] text-[#004085]',
  warning: 'bg-[#FFF3CD] border-[#FFEEBA] text-[#856404]',
  success: 'bg-[#D4EDDA] border-[#C3E6CB] text-[#155724]',
  info: 'bg-[#d1ecf1] border-[#bee5eb] text-[#0c5460]',
  danger: 'bg-[#f8d7da] border-[#f5c6cb] text-[#721c24]',
};

export default function Alert({ type, children }) {
  return (
    <div
      className={`rounded-[10px] border p-4 text-center text-base font-normal min-[450px]:text-[1.2rem] [&_a]:text-inherit [&_a]:underline ${typeStyles[type] || ''}`}
    >
      {children}
    </div>
  );
}
