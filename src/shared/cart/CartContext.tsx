/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback, useEffect, useState } from 'react';
import useLocalStorage from '@shared/hooks/useLocalStorage';
import { updateQuantity } from './utils';

type ContextProps = {
  add: (_: Balloon) => void;
  toggle: (_: Balloon) => void;
  remove: (_: string) => void;
  balloons: BalloonWithQuantity[];
  isInCart: (_: string) => boolean;
  addQuantity: (_: string) => void;
  subtractQuantity: (_: string) => void;
};

export const CartContext = React.createContext<ContextProps>({
  add: () => null,
  remove: () => null,
  balloons: [],
  isInCart: () => false,
  toggle: () => null,
  addQuantity: () => null,
  subtractQuantity: () => null,
});

interface DropDownMenuInterface {
  children: React.ReactNode;
}

export const CartProvider: React.FunctionComponent<DropDownMenuInterface> = ({ children }) => {
  const [cart = [], setCart] = useLocalStorage('cart', []);
  const [balloons, setBalloons] = useState<BalloonWithQuantity[]>([]);

  const add = useCallback(
    (balloon: Balloon) => {
      !isInCart(balloon.id)
        ? setBalloons(v => [{ balloon, count: 1 }, ...v])
        : addQuantity(balloon.id);
    },
    [balloons],
  );

  const isInCart = useCallback(
    (id: string) => {
      return !!balloons.find(
        (balloonWithQuantity: BalloonWithQuantity) => balloonWithQuantity.balloon.id === id,
      );
    },
    [balloons],
  );

  const toggle = useCallback(
    (balloon: Balloon) => {
      isInCart(balloon.id) ? remove(balloon.id) : add(balloon);
    },
    [balloons],
  );

  const remove = useCallback(
    (id: string) => {
      setBalloons(v => v.filter(balloonWithQuantity => balloonWithQuantity.balloon.id !== id));
    },
    [balloons],
  );

  const addQuantity = useCallback(
    (id: string) => {
      setBalloons(updateQuantity(balloons, id, 1));
    },
    [balloons],
  );

  const subtractQuantity = useCallback(
    (id: string) => {
      setBalloons(
        updateQuantity(balloons, id, -1).filter(
          (balloonWithQuantity: BalloonWithQuantity) => balloonWithQuantity.count > 0,
        ),
      );
    },
    [balloons],
  );

  // Load initial local storage values
  useEffect(() => {
    setBalloons(cart);
  }, []);

  // Update local storage on every balloons change
  useEffect(() => {
    setCart(balloons as []);
  }, [balloons]);

  return (
    <CartContext.Provider
      value={{ add, remove, balloons, isInCart, toggle, subtractQuantity, addQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};
