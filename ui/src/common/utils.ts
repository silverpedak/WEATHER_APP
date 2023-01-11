interface TimeOptions {
  hour: "numeric" | "2-digit" | undefined;
  minute: "numeric" | "2-digit" | undefined;
  second: "numeric" | "2-digit" | undefined;
  hour12?: boolean;
  timeZone?: string;
}

export const parseDate = (milliseconds: number): string => {
  const realMs = parseInt(milliseconds.toString() + "000");
  const date = new Date(realMs);
  const options: TimeOptions = {
    hour: "2-digit",
    minute: "2-digit",
    second: undefined,
    hour12: false,
  };
  const timeString = new Intl.DateTimeFormat("en-US", options).format(date);
  return timeString;
};

export const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
