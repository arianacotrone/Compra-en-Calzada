async function getComercios() {
  const res = await fetch(CONFIG.API_COMERCIOS);
  return await res.json();
}

function getParam(param) {
  const url = new URLSearchParams(window.location.search);
  return url.get(param);
}
