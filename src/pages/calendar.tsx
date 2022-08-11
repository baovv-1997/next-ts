import { Button } from 'antd';
import moment from 'moment';
import { useMemo, useState } from 'react';
import {
  format,
  subMonths,
  addMonths,
  startOfWeek,
  addDays,
  isSameDay,
  lastDayOfWeek,
  startOfMonth,
  getDaysInMonth,
  getWeek,
  addWeeks,
  subWeeks,
} from 'date-fns';

const Index = () => {
  const [dateNow, setDateNow] = useState(new Date());
  // const [currentWeek, setCurrentWeek] = useState(getWeek(dateNow));
  // const [selectedDate, setSelectedDate] = useState(new Date());

  console.log('-------------', dateNow);

  const [isMonth, setIsMonth] = useState<boolean>(true);

  const daysInMonth = useMemo(() => {
    if (!isMonth) {
      return [];
    }
    const dateFormat = 'd';

    let numOfDayFirstBlank = startOfMonth(dateNow).getDay();
    numOfDayFirstBlank = numOfDayFirstBlank === 0 ? 6 : numOfDayFirstBlank - 1;

    const dayOfMonth = getDaysInMonth(dateNow);

    const days = [];
    for (let i = 0; i < numOfDayFirstBlank; i++) {
      days.push('');
    }

    for (let i = 0; i < dayOfMonth; i++) {
      days.push(format(addDays(1, i), dateFormat));
    }

    return days;
  }, [dateNow, isMonth]);

  const daysInWeek = useMemo(() => {
    if (isMonth) {
      return [];
    }
    const dateFormat = 'd';
    const startDate = startOfWeek(dateNow, { weekStartsOn: 1 });
    //const endDate = lastDayOfWeek(today, { weekStartsOn: 1 });

    const days = [];
    for (let i = 0; i < 7; i++) {
      days.push(format(addDays(startDate, i), dateFormat));
    }

    return days;
  }, [dateNow, isMonth]);

  // const handlePrevYear = () => {
  //   setYear(moment(`${year}`, 'YYYY').subtract(1, 'year').format('YYYY'));
  // };

  // const handleNextYear = () => {
  //   setYear(moment(`${year}`, 'YYYY').add(1, 'year').format('YYYY'));
  // };

  const handlePrevMonth = () => {
    if (isMonth) {
      setDateNow(subMonths(dateNow, 1));
      return;
    }

    setDateNow(subWeeks(dateNow, 1));
    //setWeek(getWeek(subWeeks(dateNow, 1)));
  };

  const handleNext = () => {
    if (isMonth) {
      setDateNow(addMonths(dateNow, 1));

      return;
    }

    setDateNow(addWeeks(dateNow, 1));
    //setWeek(getWeek(addWeeks(dateNow, 1)));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center gap-10 mb-4">
        <Button onClick={handlePrevMonth}>Prev</Button>
        <span>{/* {year}年{month}月 */}</span>
        <Button onClick={handleNext}>Next</Button>
        <Button onClick={() => setIsMonth((prevState) => !prevState)}>
          {isMonth ? 'Month' : 'Week'}
        </Button>
      </div>

      <div className="grid grid-cols-7 bg-[#dedede] gap-[1px]">
        {['月', '火', '水', '木', '金', '土', '日'].map((item, index) => {
          return (
            <span key={index} className="text-center w-[80px]">
              {item}
            </span>
          );
        })}
      </div>
      {isMonth ? (
        <div className="grid grid-cols-7 bg-[#dedede] gap-[1px]">
          {daysInMonth.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[80px] h-[80px] bg-white flex items-center justify-center"
              >
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="grid grid-cols-7 bg-[#dedede] gap-[1px]">
          {daysInWeek.map((item, index) => {
            return (
              <div
                key={index}
                className="w-[80px] h-[80px] bg-white flex items-center justify-center"
              >
                <span>{item}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Index;
