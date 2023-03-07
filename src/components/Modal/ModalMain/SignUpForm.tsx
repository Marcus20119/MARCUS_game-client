import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input, InputTogglePassword } from '~/components/Form';
import { Heading } from '~/components/Heading';
import { ButtonPrimary } from '~/components/Button';
import { changeAuthType } from '~/store/mainSlice';

const schema = yup.object({
  password: yup
    .string()
    .max(8, 'must be 8 characters')
    .min(8, 'must be 8 characters')
    .required('Required'),
  email: yup.string().email().required('required'),
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
});

const SignUpForm = () => {
  const dispatch = useDispatch();

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
      console.log(data);
    } catch (err) {}
  };
  return (
    <div className="flex flex-col gap-6 w-full">
      <Heading
        as="h2"
        text="SIGN UP"
        className="block w-full pb-1 text-4xl font-bold tracking-wide border-b border-b-gray-300"
      />
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="flex flex-col gap-3 w-full"
        autoComplete="off"
        noValidate
      >
        <div className="grid grid-cols-2 gap-4">
          <Input
            control={control}
            name="firstName"
            placeholder="Marcus"
            label="First Name *"
          ></Input>
          <Input
            control={control}
            name="lastName"
            placeholder="Freeman"
            label="Last Name *"
          ></Input>
        </div>
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
          <span className="">You already have an account?</span>
          <span
            className="text-emerald-600 cursor-pointer opacity-100 hover:opacity-80 font-bold tracking-wide underline underline-offset-1"
            onClick={() => dispatch(changeAuthType('Sign In'))}
          >
            Sign In
          </span>
        </div>

        <ButtonPrimary
          type="submit"
          isSubmitting={isSubmitting}
          additionalClass="!bg-gray-300 !text-black"
        >
          Sign Up
        </ButtonPrimary>
      </form>
    </div>
  );
};

export default SignUpForm;
