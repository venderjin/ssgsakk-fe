const getData = async () => {
  const res = await fetch(`${process.env.BASE_URL}/auth/user-info`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.ok) {
    const data = await res.json();

    return data.result;
  }

  if (res.status === 400) {
    console.log("잘못된 요청입니다.");
  }
};

const Test = async () => {
  const data = await getData();

  return <div></div>;
};

export default Test;
