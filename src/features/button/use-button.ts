export const useButtonStyles = (bgColor: string, hoverColor: string) => {
  const baseStyles =
    'cursor-pointer text-black font-bold px-4 py-2 rounded-xl border-3 border-black';
  const disabledStyles = 'disabled:bg-gray-400';
  return `${baseStyles} ${bgColor} ${hoverColor} ${disabledStyles}`;
};
