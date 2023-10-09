export default function strEnum(o: KeyValInterface[]): KeyValType {
  return o.reduce((res, { key, value }) => {
    res[key] = value;
    return res;
  }, Object.create(null));
}
