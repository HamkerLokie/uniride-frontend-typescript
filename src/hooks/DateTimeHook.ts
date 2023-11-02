import { useState, useRef } from 'react';

export function useTime() {
  const [time, setTime] = useState<string | number>();
  const selectedTime = useRef<string>();

  const onTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = event.target.value;
    const list = newTime.split(':').join('');
    selectedTime.current = list;
    setTime(newTime);
  };

  return {
    time,
    onTimeChange,
  };
}

export function useDate() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(new Date(event.target.value));
  };

  return {
    selectedDate,
    handleDateChange,
  };
}
