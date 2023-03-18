import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { ButtonPrimary } from '~/components/Button';
import { Input, Radio } from '~/components/Form';
import { Heading } from '~/components/Heading';
import { useDispatch, useSelector } from 'react-redux';
import { IRootState } from '~/store/rootReducer';
import { actionUpdatePlayerData } from '~/store/player/player.action';
import { useEffect } from 'react';

const schema = yup.object({
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
  email: yup.string().email().required('required'),
});

const radios: {
  name: string;
  value: number;
}[] = [
  {
    name: 'Male',
    value: 0,
  },
  {
    name: 'Female',
    value: 1,
  },
  {
    name: 'Other',
    value: 2,
  },
];

const UpdatePlayerForm = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state: IRootState) => state.auth);
  const { loadingUpdatePlayer } = useSelector(
    (state: IRootState) => state.player
  );
  const {
    control,
    handleSubmit,
    // formState: { isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onSubmit',
  });

  useEffect(() => {
    reset({
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email,
      gender: userData.gender === null ? -1 : userData.gender,
      phoneNumber: userData.phoneNumber || '',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData]);

  // Handle submit
  const onSubmitHandler = async (data: any) => {
    try {
      data.gender = data?.gender ? parseInt(data.gender?.toString()) : -1;
      dispatch(
        actionUpdatePlayerData({ userId: userData.id, updateData: data })
      );
    } catch (err: any) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col gap-6 w-full">
      <Heading
        as="h2"
        text="UPDATE INFO"
        className="block w-full pb-1 text-4xl font-bold tracking-wide border-b border-b-gray-300"
      />
      <form
        onSubmit={handleSubmit(onSubmitHandler)}
        className="flex flex-col gap-3 w-full"
        // autoComplete="off"
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

        <Input
          control={control}
          name="phoneNumber"
          type="tel"
          placeholder="0777421072"
          label="Phone Number"
        ></Input>

        <Radio control={control} name="gender" label="Gender" radios={radios} />
        <ButtonPrimary
          type="submit"
          isSubmitting={loadingUpdatePlayer}
          additionalClass="!bg-gray-300 !text-black"
        >
          Update
        </ButtonPrimary>
      </form>
    </div>
  );
};

export default UpdatePlayerForm;
