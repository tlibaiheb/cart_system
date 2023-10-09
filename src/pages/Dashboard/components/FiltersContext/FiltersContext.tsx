/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, ReactNode, useCallback, useState } from 'react';
import initials from './initials';
import { isEqual } from 'lodash';

interface Props {
  children: ReactNode;
}

interface FiltersContextProps {
  setFilter: (key: string) => (val: any) => void;
  filters: Filters;
  changed: boolean;
}

export const Context = createContext<FiltersContextProps>({
  setFilter: (_: string) => _ => null,
  filters: initials,
  changed: false,
});

const Provider: React.FunctionComponent<Props> = ({ children }) => {
  const [filters, setFilters] = useState<Filters>(initials);

  const setFilter = useCallback(
    (key: string) => (value: string) => {
      setFilters({ ...filters, [key]: value });
    },
    [filters],
  );

  return (
    <Context.Provider value={{ filters, setFilter, changed: !isEqual(filters, initials) }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
