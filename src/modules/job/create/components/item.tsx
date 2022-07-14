import { Select } from 'antd';
import useDMYSelect from 'common/hooks/useDMYSelect';
import { Controller } from 'react-hook-form';
const { Option } = Select;

interface IProps {
  periodIndex: number;
  keyName: 'startTime' | 'endTime';
  control: any;
}

const Index = ({ periodIndex, keyName, control }: IProps) => {
  const { listDay, listMonth, listYear } = useDMYSelect({
    fromYear: new Date().getFullYear(),
    toYear: new Date().getFullYear() + 29,
    selectedYear: 2023,
    selectedMonth: 10,
  });

  return (
    <div className="flex gap-4 items-center">
      <Controller
        control={control}
        name={`jobPeriods[${periodIndex}].${keyName}.year`}
        render={({ field }) => (
          <Select className="w-24" size="large" {...field}>
            {listYear.map((item, index) => (
              <Option key={index} value={item}>
                {item}
              </Option>
            ))}
          </Select>
        )}
      />

      <span>年</span>
      <Select className="w-24" size="large">
        {listMonth.map((item, index) => (
          <Option key={index} value={item}>
            {item + 1}
          </Option>
        ))}
      </Select>
      <span>月</span>
      <Select className="w-24" size="large">
        {listDay.map((item, index) => (
          <Option key={index} value={item}>
            {item}
          </Option>
        ))}
      </Select>
      <span>日</span>
    </div>
  );
};

export default Index;
