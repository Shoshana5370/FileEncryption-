import * as React from "react";
export type CalendarProps = {
    selected: Date | null;
    onChange: (date: Date | null) => void;
    className?: string;
    minDate?: Date;
    maxDate?: Date;
};
export declare function Calendar({ selected, onChange, className, minDate, maxDate, }: CalendarProps): React.JSX.Element;
