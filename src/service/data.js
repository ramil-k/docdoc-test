export const sendData = async ({shippingInfo, generalInfo}, dispatch) => {
  dispatch({ type: 'SetShippingInfo', payload: shippingInfo });
  const payload = JSON.stringify({shippingInfo, generalInfo});

  const rand = Math.floor(Math.random() * 2) === 1;

  // request for an api from docs:
  // const request = await fetch('test.php', {method: 'post', body: payload });

  // stub request:
  const request = await fetch(`${process.env.PUBLIC_URL}/test_${rand}.json?payload=${encodeURIComponent(payload)}`);
  const { success } = await request.json();

  if (success) {
    dispatch({type: 'Submitted'})
    await new Promise(resolve => setTimeout(resolve, 3000));
    window.location.reload();
    return;
  }

  dispatch({type: 'Error'})
  await new Promise(resolve => setTimeout(resolve, 3000));
  dispatch({type: 'ErrorExpired'})
}
