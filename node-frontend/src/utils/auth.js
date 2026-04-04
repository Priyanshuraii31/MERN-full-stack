export const saveAuth = (token, email, rememberMe) => {
  if (rememberMe) {
    localStorage.setItem("token", token);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("rememberMe", "true");

    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userEmail");
  } else {
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("userEmail", email);
    localStorage.setItem("rememberMe", "false");

    localStorage.removeItem("token");
    localStorage.removeItem("userEmail");
  }
};

export const getToken = () => {
  return localStorage.getItem("token") || sessionStorage.getItem("token");
};

export const getUserEmail = () => {
  return localStorage.getItem("userEmail") || sessionStorage.getItem("userEmail");
};

export const clearAuth = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userEmail");
  localStorage.removeItem("rememberMe");

  sessionStorage.removeItem("token");
  sessionStorage.removeItem("userEmail");
};

export const parseJwt = (token) => {
  try {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((char) => `%${(`00${char.charCodeAt(0).toString(16)}`).slice(-2)}`)
        .join("")
    );

    return JSON.parse(jsonPayload);
  } catch (error) {
    return null;
  }
};

export const isTokenExpired = (token) => {
  const decoded = parseJwt(token);

  if (!decoded || !decoded.exp) return true;

  const currentTime = Date.now() / 1000;
  return decoded.exp < currentTime;
};