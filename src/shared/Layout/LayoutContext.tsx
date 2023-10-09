import React, { ReactNode, useCallback, useState } from 'react';
import Layout from '@shared/Layout/Layout';

interface Props {
  className?: string;
  children: ReactNode;
}

type ContextProps = {
  drawerVisible: boolean;
  toggleDrawer: () => void;
  openDrawer: () => void;
};
export const DrawerContext = React.createContext<ContextProps>({
  drawerVisible: false,
  toggleDrawer: () => null,
  openDrawer: () => null,
});

const LayoutContext: React.FunctionComponent<Props> = ({ className, children }) => {
  const [drawerVisible, setDrawerVisible] = useState<boolean>(false);

  const toggleDrawer = useCallback(() => {
    setDrawerVisible(v => !v);
  }, []);

  const openDrawer = useCallback(() => {
    setDrawerVisible(true);
  }, []);

  return (
    <div className={className}>
      <DrawerContext.Provider value={{ toggleDrawer, drawerVisible, openDrawer }}>
        <Layout>{children}</Layout>
      </DrawerContext.Provider>
    </div>
  );
};

export default LayoutContext;
