export const forbiddenRegex = [
  /^CREATE$/,
  /^USE$/,
  /^DESCRIBE$/,
  /^ALTER$/,
  /^DROP$/,
  /^INSERT$/,
  /^DELETE$/,
  /^UPDATE$/,
  /^SHOW$/,
  /^RENAME$/,
  /^TRANCATE$/,
  /^CALL$/,
  /^IMPORT$/,
  /^LOAD$/,
  /^REPLACE$/,
  /^DO$/,
  /^START$/,
  /^COMMIT$/,
  /^ROLLBACK$/,
  /^LOCK$/,
  /^SET$/,
  /^PREPARE$/,
  /^EXECUTE$/,
  /^DEALLOCATE$/,
  /^SLEEP\([0-9]*\)$/
];

export const isValidQuery = sql => {
  const sqlWords = sql
    .match(/([a-zа-я0-9.'\(\)"]+)/gi)
    .map(word => word.toUpperCase());
    
  for (const word of sqlWords) {
    const isMatch = forbiddenRegex.some(regex => regex.test(word));
    if (isMatch) return false;
  }
  return true;
};
