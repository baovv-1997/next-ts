import { useState, useEffect } from 'react';

interface IProps {
  toYear: number;
  fromYear: number;
  selectedYear: number;
  selectedMonth: number;
}

export default function useDMYSelect({
  toYear,
  fromYear,
  selectedYear,
  selectedMonth,
}: IProps) {
  const [listYear, setListYear] = useState<number[]>([]);
  const [listMonth] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
  const [listDay, setListDay] = useState<number[]>([]);

  useEffect(() => {
    if (
      !Number.isInteger(fromYear) ||
      !Number.isInteger(toYear) ||
      fromYear > toYear
    ) {
      return;
    }

    const getListYear = [];

    for (let index = fromYear; index <= toYear; index++) {
      getListYear.push(index);
    }

    setListYear(getListYear);
  }, []);

  useEffect(() => {
    const numOFDate = new Date(
      selectedYear,
      Number(selectedMonth) + 1,
      0
    ).getDate();

    const getListDay = [];
    for (let index = 1; index <= numOFDate; index++) {
      getListDay.push(index);
    }

    setListDay(getListDay);
  }, [selectedMonth, selectedYear]);

  return { listYear, listMonth, listDay };
}
