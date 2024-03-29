const regex = {
  id: /^[a-zA-Z0-9]{6,20}$/,
  email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
  //password: /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,20}$/,
  password: /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d@$!%*?&#.~_-]{8,20}$/,
  name: /^[가-힣]{2,6}$/,
  phone: /^01(0|1|[6-9])[0-9]{3,4}[0-9]{4}$/,
};

export default regex;
