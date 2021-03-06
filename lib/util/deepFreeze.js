export const deepFreeze = target => {
  if (Object.isFrozen(target)) {
    return target;
  }

  if (!Array.isArray(target) && Object.getPrototypeOf(target) !== Object.getPrototypeOf({})) {
    if (Object.getPrototypeOf(target) !== Object.getPrototypeOf(Function)) {
      throw new Error('not allow types');
    }
  }

  Object.freeze(target);
  Object.keys(target).forEach(key => {
    deepFreeze(target[key]);
  });

  return target;
};
