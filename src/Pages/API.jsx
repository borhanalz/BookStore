
export const search = params => {
  return fetch(`https://map.ir/search/v2/`, {
    method: 'POST',
    headers: {
      'x-api-key': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjcyOGFkMTFlMGFmOTc2YjE3MWExNGQwMTA4MDg2ZTdlMWYwZjczYTU3YmRjYjc4MmE0NWE1MjRkYjUyZTZjMjg5OGU3YzNhMzU0NzBmN2RlIn0.eyJhdWQiOiIxOTM2OSIsImp0aSI6IjcyOGFkMTFlMGFmOTc2YjE3MWExNGQwMTA4MDg2ZTdlMWYwZjczYTU3YmRjYjc4MmE0NWE1MjRkYjUyZTZjMjg5OGU3YzNhMzU0NzBmN2RlIiwiaWF0IjoxNjYyNDY3MTI4LCJuYmYiOjE2NjI0NjcxMjgsImV4cCI6MTY2NTE0OTEyOCwic3ViIjoiIiwic2NvcGVzIjpbImJhc2ljIl19.DN3NnVKhiDV9wqWMjKDXCWUP_4KtVhlCiycHiV8PyIREZi8wC2gskHYrsStNycUX52IEJttT98NZQDQspAmhsl28rjHyFvmFbuinQ2St0a6t6TM297eBNaJBN6O1nINcOHf9rzdIK_RXWz1-dQN5L8BFr6Q4c3H13b8HUyMYqP2HvPvqjthxI9VZF4MunWVKbHzXOuLw-5buipquMZLrNSuK1L_uT5x5zI98LQFFuSvYgMWJfFRf8bZug-FSlMBLuXSmxotAGeu-xKdpSUICM5Bf9xZ9fFALeR0b44oOMxMfUbW2r5TuGeGmVuLKD5oKpB1dCD72zWZTQIi6YSuPkg',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  });
};
