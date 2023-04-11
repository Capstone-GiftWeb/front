import { Cookies } from "react-cookie";

const cookies = new Cookies();
//쿠키에 값을 저장할때 
export const setCookie = (name, value, option) => {
  if (typeof value === 'object') {
    value = JSON.stringify(value);
  }
  return cookies.set(name, value, { ...option });
};
//쿠키에 있는 값을 꺼낼때 
export const getCookie = (name) => {
  return cookies.get(name) || [];
};
//쿠키를 지울때 
export const removeCookie = (name) =>{
    return cookies.remove(name);
}
//최근 본 목록이 5개가 넘어가면 최근 5개만 남김
export const removeRecentProduct = (name) => {
  const cookieValue = cookies.get(name);

  if (cookieValue) {
    let cookieArray = cookieValue.split(','); // 쿠키 값을 배열로 변환
    cookieArray = cookieArray.slice(cookieArray.length - 5, cookieArray.length);
    const updatedCookie = cookieArray.join(','); // 변경된 배열을 다시 문자열로 변환
    cookies.set(name, updatedCookie); // 변경된 값을 쿠키에 저장
  }
}