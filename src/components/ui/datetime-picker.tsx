"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Input } from "./input"

interface DateTimePickerProps {
    date: Date | undefined;
    setDate: (date: Date | undefined) => void;
}

export function DateTimePicker({ date, setDate }: DateTimePickerProps) {
    const handleDateChange = (selectedDate: Date | undefined) => {
        const hour = date?.getHours() ?? 0;
        const minute = date?.getMinutes() ?? 0;

        if (selectedDate) {
            const newDate = new Date(selectedDate);
            newDate.setHours(hour, minute);
            setDate(newDate);
        } else {
            setDate(undefined);
        }
    };

    const handleTimeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const [hour, minute] = e.target.value.split(":").map(Number);
        const newDate = date ? new Date(date) : new Date();
        newDate.setHours(hour, minute);
        setDate(newDate);
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant={"outline"}
                    className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPPp") : <span>Selecione data e hora</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar
                    mode="single"
                    selected={date}
                    onSelect={handleDateChange}
                    initialFocus
                />
                <div className="p-2 border-t">
                    <Input
                        type="time"
                        value={date ? `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}` : ''}
                        onChange={handleTimeChange}
                        disabled={!date}
                    />
                </div>
            </PopoverContent>
        </Popover>
    )
} 