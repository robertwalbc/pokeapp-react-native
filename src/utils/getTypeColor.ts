import { colors } from "./colors";

export const getTypeColor = (type: string): string => {
    return (colors as { [key: string]: string })[type] || '#A8A878';
  };
