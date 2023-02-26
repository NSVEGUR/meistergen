export default function exclude<Schema, Key extends keyof Schema>(
  model: Schema,
  keys: Key[]
): Omit<Schema, Key> {
  for (let key of keys) {
    delete model[key];
  }
  return model;
}
