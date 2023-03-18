import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonPrimary } from '~/components/Button';
import { Input, Radio } from '~/components/Form';
import { Heading } from '~/components/Heading';
import { IRootState } from '~/store/rootReducer';
import { useEffect } from 'react';
import { actionUpdateUserData } from '~/store/admin/admin.action';
import { setUsersData } from '~/store/admin/admin.slice';

const schema = yup.object({
  firstName: yup.string().required('required'),
  lastName: yup.string().required('required'),
  email: yup.string().email().required('required'),
});

type RadioType = {
  name: string;
  value: number;
};

const genderRadios: RadioType[] = [
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

const roleRadios: RadioType[] = [
  {
    name: 'Player',
    value: 0,
  },
  {
    name: 'Admin',
    value: 1,
  },
];

const UpdateUserForm = () => {
  const dispatch = useDispatch();
  const { loadingUpdateUser, selectedUserData, usersData } = useSelector(
    (state: IRootState) => state.admin
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
      firstName: selectedUserData.firstName,
      lastName: selectedUserData.lastName,
      email: selectedUserData.email,
      gender: selectedUserData.gender === null ? -1 : selectedUserData.gender,
      roleId: selectedUserData.roleId,
      phoneNumber: selectedUserData.phoneNumber || '',
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedUserData]);

  // Handle submit
  const onSubmitHandler = async (data: any) => {
    try {
      data.gender = data?.gender ? parseInt(data.gender?.toString()) : -1;
      dispatch(
        actionUpdateUserData({
          userId: selectedUserData.id,
          updateData: data,
        })
      );
      const updateUsersData = [...usersData].map(item => {
        if (item.id === selectedUserData.id) {
          return {
            ...{ ...item, ...data },
          };
        }
        return item;
      });
      dispatch(setUsersData(updateUsersData));
    } catch (err: any) {
      console.log(err);
    }
  };
  return (
    <div className="flex flex-col gap-6 w-full">
      <Heading
        as="h2"
        text="UPDATE USER"
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
          placeholder=""
          label="Phone Number"
        ></Input>

        <Radio
          control={control}
          name="gender"
          label="Gender"
          radios={genderRadios}
        />

        <Radio
          control={control}
          name="roleId"
          label="Role *"
          radios={roleRadios}
        />
        <ButtonPrimary
          type="submit"
          isSubmitting={loadingUpdateUser}
          additionalClass="!bg-gray-300 !text-black"
        >
          Update
        </ButtonPrimary>
      </form>
    </div>
  );
};

export default UpdateUserForm;
