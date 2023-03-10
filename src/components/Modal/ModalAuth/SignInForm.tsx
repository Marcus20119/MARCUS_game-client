import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useDispatch } from 'react-redux';

import { Input, InputTogglePassword, Error } from '~/components/Form';
import { Heading } from '~/components/Heading';
import { ButtonPrimary } from '~/components/Button';
import {
  changeAuthModalType,
  handleHideAuthModal,
} from '~/store/auth/auth.slice';
import { actionSignIn } from '~/store/auth/auth.action';

const schema = yup.object({
  password: yup.string().required('Required'),
  email: yup.string().required('required'),
});

const SignInForm = () => {
  const dispatch = useDispatch();
  const [errorMessage, setErrorMessage] = useState('');

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });
  // Handle submit
  const onSubmitHandler = async (data: any) => {
    try {
      dispatch(actionSignIn(data));
      setErrorMessage('');
      dispatch(handleHideAuthModal());
    } catch (err: any) {
      console.log(err);
      setErrorMessage(err?.response?.data?.message);
    } finally {
      reset({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
    }
  };

  return (
    <div className="flex flex-col gap-6 w-full">
      <Heading
        as="h2"
        text="SIGN IN"
        className="block w-full pb-1 text-4xl font-bold tracking-wide border-b border-b-gray-300"
      />
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="flex flex-col gap-3 w-full"
        // autoComplete="off"
        noValidate
      >
        <Input
          control={control}
          name="email"
          type="email"
          placeholder="example@gmail.com"
          label="Email *"
        ></Input>
        <InputTogglePassword
          control={control}
          name="password"
          placeholder="********"
          label="Password *"
        ></InputTogglePassword>

        <div className="flex items-center gap-2 my-1 text-sm">
          <span className="">You have not had an account?</span>
          <span
            className="text-emerald-600 cursor-pointer opacity-100 hover:opacity-80 font-bold tracking-wide underline underline-offset-1"
            onClick={() => dispatch(changeAuthModalType('Sign Up'))}
          >
            Sign Up
          </span>
        </div>

        <Error errorMessage={errorMessage} />
        <ButtonPrimary
          type="submit"
          isSubmitting={isSubmitting}
          additionalClass="!bg-gray-300 !text-black"
        >
          Sign In
        </ButtonPrimary>
      </form>
    </div>
  );
};

export default SignInForm;
