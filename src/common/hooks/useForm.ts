import {
  useForm,
  Controller,
  UseFormProps,
  FieldValues,
} from 'react-hook-form';

export const useHookForm = <
  TFieldValues extends FieldValues = FieldValues,
  TContext extends object = object
>(
  initialState?: UseFormProps<TFieldValues, TContext>
) => {
  const { setValue, ...useFormArgs } = useForm<TFieldValues, TContext>(
    initialState
  );

  const setData = (data: TFieldValues) => {
    Object.entries(data).forEach(([name, value]: [any, any]) =>
      setValue(name, value)
    );
  };

  return {
    ...useFormArgs,
    setData,
    Controller,
  };
};
