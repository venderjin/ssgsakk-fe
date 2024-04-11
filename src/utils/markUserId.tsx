const maskUserId = (userId: string) => {
  const firstThreeChars = userId.slice(0, 3);
  return firstThreeChars + "*******";
};

export default maskUserId;
