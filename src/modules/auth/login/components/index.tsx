import { Button, Checkbox, Form, Input } from 'antd';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import validateSchema from '../validateSchema';
import { useEffect } from 'react';
import { useHookForm } from 'common/hooks/useForm';

interface IFormInputs {
  username: string;
  password: string;
}

const Index = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setData,
  } = useHookForm<IFormInputs>({ resolver: yupResolver(validateSchema) });

  const onSubmit = (data: IFormInputs) => {
    console.log('data', data);
  };

  useEffect(() => {
    setData({
      username: 'd',
      password: '',
    });
  }, []);

  return (
    <div className="w-[720px] mx-auto flex justify-center py-[300px]">
      <div>
        <Controller
          name="username"
          control={control}
          render={({ field }) => (
            <>
              <Input {...field} />
              {errors.username?.message}
            </>
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <>
              <Input.Password {...field} />
              {errors.password?.message}
            </>
          )}
        />

        {/* <Form.Item
          {...register('remember')}
          valuePropName="checked"
          wrapperCol={{ offset: 8, span: 16 }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item> */}

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
        </Form.Item>
      </div>
    </div>
  );
};

export default Index;
