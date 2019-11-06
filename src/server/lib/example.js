exports.pluralize = function (count, singular, plural) {
  if (count === 1) {
    return `${count} ${singular}`;
  }
  plural = plural || `${singular}s`;
  return `${count} ${plural}`;
};

exports.pluralizeDouble = function (count, singular, plural) {
  if (count === 1) {
    return count + " " +singular;
  }
  plural = plural || `${singular}s`;
  return count + " "+plural;
};

exports.pluralizeSingle = function (count, singular, plural) {
  if (count === 1) {
    return count + ' ' +singular;
  }
  plural = plural || `${singular}s`;
  return count + ' ' +plural;
};
