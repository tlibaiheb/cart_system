const updateQuantity = (
  balloons: BalloonWithQuantity[],
  id: string,
  n: number,
): BalloonWithQuantity[] =>
  balloons.map((balloonWithQuantity: BalloonWithQuantity) => {
    if (balloonWithQuantity.balloon.id === id) {
      return {
        ...balloonWithQuantity,
        count: balloonWithQuantity.count + n,
      };
    }
    return balloonWithQuantity;
  });

export { updateQuantity };
