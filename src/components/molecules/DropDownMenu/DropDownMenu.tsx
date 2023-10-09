import React, { useState, useCallback, ReactNode, useMemo } from 'react';

type ContextProps = {
  opened: boolean;
  toggle: () => void;
  onChange: (val: KeyValInterface) => void;
  selected: KeyValInterface;
  options: KeyValInterface[];
};
export const DropDownMenuContext = React.createContext<ContextProps>({
  opened: false,
  toggle: () => null,
  onChange: (_: KeyValInterface) => null,
  selected: { key: '', value: '' },
  options: [],
});

interface DropDownMenuInterface {
  children: ReactNode;
  options: KeyValInterface[];
  onDropDownChange: (val: KeyValInterface) => void;
  className?: string;
  defaultValue: string;
}

const DropDownMenu: React.FunctionComponent<DropDownMenuInterface> = ({
  children,
  options,
  onDropDownChange,
  defaultValue,
}) => {
  const [opened, setOpened] = useState<boolean>(false);
  const initial = useMemo(() => ({ key: 'default', value: defaultValue }), [defaultValue]);
  const [selected, setSelected] = useState<KeyValInterface>(initial || options[0]);

  const toggle = useCallback(() => {
    setOpened(v => !v);
  }, []);

  const onChange = useCallback(
    val => {
      if (selected.key === val.key) setSelected(initial);
      else setSelected(val);
      onDropDownChange(val);
      toggle();
    },
    [initial, onDropDownChange, selected, toggle],
  );

  return (
    <DropDownMenuContext.Provider value={{ opened, toggle, selected, onChange, options }}>
      <div className='menu' style={{ position: 'relative' }}>
        {children}
      </div>
    </DropDownMenuContext.Provider>
  );
};

export default DropDownMenu;
