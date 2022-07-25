import { Button } from 'antd';
import { useHookForm } from 'common/hooks/useForm';
import { useEffect } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import Item from './item';

const Index = () => {
  const { control, watch, setData } = useHookForm({
    defaultValues: {
      jobPeriods: [{}],
    },
  });

  // useEffect(() => {
  //   setData({
  //     jobPeriods: ['string'],
  //   });
  // }, []);

  const { fields, append } = useFieldArray({
    control,
    name: 'jobPeriods',
  });

  return (
    <div className="w-full h-screen flex justify-center">
      <div>
        {fields.map((field, index) => (
          <Item
            key={field.id}
            keyName="startTime"
            periodIndex={index}
            control={control}
          />
        ))}
      </div>
      <Button onClick={() => append([{}])}>+</Button>
    </div>
  );
};

export default Index;
