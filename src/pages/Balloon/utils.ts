function getVariantLogo(variant: string): string {
  if (variant === 'HEART') return 'Heart';
  if (variant === 'STAR') return 'Star';
  return 'Balloon';
}

export { getVariantLogo };
