import { FC, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Entry } from '../../interfaces';
import { EntriesContext, entriesReducer } from './';

interface Props {
  children: JSX.Element;
}

export interface EntriesState {
  entries: Entry[];
}

const Entries_INITIAL_STATE: EntriesState = {
  entries: [
    {
      _id: uuidv4(),
      description: 'Pendiente: Ullamco amet labore ullamco amet dolore sint.',
      status: 'pending',
      createAt: Date.now(),
    },
    {
      _id: uuidv4(),
      description:
        'En Curso: Cupidatat commodo reprehenderit enim nisi aute incididunt.',
      status: 'in-progress',
      createAt: Date.now() - 1000000,
    },
    {
      _id: uuidv4(),
      description:
        'Finalizada: Lorem ut id dolore voluptate laboris anim culpa adipisicing qui.',
      status: 'finished',
      createAt: Date.now() - 100000,
    },
  ],
};

export const EntriesProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE);
  const addNewEntry = (description: string) => {
    const NewEntry: Entry = {
      _id: uuidv4(),
      description,
      createAt: Date.now(),
      status: 'pending',
    };

    dispatch({ type: '[Entry] Add-Entry', payload: NewEntry });
  };
  const updateEntry = (entry: Entry) => {
    dispatch({ type: '[Entry] entry-updated', payload: entry });
  };

  return (
    <EntriesContext.Provider
      value={{
        ...state,
        //methods
        addNewEntry,
        updateEntry,
      }}
    >
      {children}
    </EntriesContext.Provider>
  );
};
