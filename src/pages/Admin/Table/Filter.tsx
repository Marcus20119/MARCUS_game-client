import { Fragment, useEffect, useState } from 'react';
import { Combobox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { UserDataType } from '~/store/rootType';

type IFilter = {
  setOrderField: React.Dispatch<React.SetStateAction<keyof UserDataType>>;
  setOrderType: React.Dispatch<React.SetStateAction<'ASC' | 'DESC'>>;
};

const fields: {
  id: number;
  name: string;
  type: keyof UserDataType;
}[] = [
  { id: 1, name: 'ID', type: 'id' },
  { id: 2, name: 'First Name', type: 'firstName' },
  { id: 3, name: 'Last Name', type: 'lastName' },
  { id: 4, name: 'Email', type: 'email' },
  { id: 5, name: 'Tel.', type: 'phoneNumber' },
  { id: 6, name: 'Gender', type: 'gender' },
  { id: 7, name: 'Role', type: 'roleId' },
  { id: 8, name: 'Created At', type: 'createdAt' },
];

const types: {
  id: number;
  name: string;
  type: 'ASC' | 'DESC';
}[] = [
  { id: 1, name: 'Ascending', type: 'ASC' },
  { id: 2, name: 'Descending', type: 'DESC' },
];

const Filter: React.FC<IFilter> = ({ setOrderField, setOrderType }) => {
  const [selectedField, setSelectedField] = useState(fields[0]);
  const [queryField, setQueryField] = useState('');

  const filteredField =
    queryField === ''
      ? fields
      : fields.filter(person =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(queryField.toLowerCase().replace(/\s+/g, ''))
        );

  useEffect(() => {
    setOrderField(selectedField.type);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedField]);

  const [selectedType, setSelectedType] = useState(types[0]);
  const [queryType, setQueryType] = useState('');

  const filteredType =
    queryType === ''
      ? types
      : types.filter(type =>
          type.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(queryField.toLowerCase().replace(/\s+/g, ''))
        );

  useEffect(() => {
    setOrderType(selectedType.type);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedType]);

  return (
    <div className="inline-flex items-center gap-2">
      <span className="text-white pr-3">Sort:</span>
      <div className="w-[200px]">
        <Combobox value={selectedField} onChange={setSelectedField}>
          <div className="relative mt-1">
            <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
              <Combobox.Input
                className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                displayValue={(field: {
                  id: number;
                  name: string;
                  type: string;
                }) => field.name}
                onChange={event => setQueryField(event.target.value)}
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Combobox.Button>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQueryField('')}
            >
              <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filteredField.length === 0 && queryField !== '' ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  filteredField.map(field => (
                    <Combobox.Option
                      key={field.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? 'bg-teal-600 text-white' : 'text-gray-900'
                        }`
                      }
                      value={field}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {field.name}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? 'text-white' : 'text-teal-600'
                              }`}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
      <div className="w-[150px]">
        <Combobox value={selectedType} onChange={setSelectedType}>
          <div className="relative mt-1">
            <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
              <Combobox.Input
                className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                displayValue={(type: {
                  id: number;
                  name: string;
                  type: string;
                }) => type.name}
                onChange={event => setQueryType(event.target.value)}
              />
              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Combobox.Button>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQueryType('')}
            >
              <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {filteredType.length === 0 && queryType !== '' ? (
                  <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  filteredType.map(type => (
                    <Combobox.Option
                      key={type.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? 'bg-teal-600 text-white' : 'text-gray-900'
                        }`
                      }
                      value={type}
                    >
                      {({ selected, active }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {type.name}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                active ? 'text-white' : 'text-teal-600'
                              }`}
                            >
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Combobox.Option>
                  ))
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
    </div>
  );
};

export default Filter;
