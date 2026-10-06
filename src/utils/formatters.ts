export const formatNumber = (num: number): string => {
  return num < 10 ? `0${num}` : `${num}`;
};

export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};
