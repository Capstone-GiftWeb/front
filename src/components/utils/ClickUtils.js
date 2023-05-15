const MAX_HISTORY_SIZE = 4; // 쿠키 배열의 최대 크기

// 상품을 클릭하면 해당 상품 href를 로컬 스토리지에 넣는 함수
const setRecentHistory = (href) => {
    let existingHistory = JSON.parse(localStorage.getItem('recentProducts')) || [];
  
    if (!existingHistory.includes(href)) {
      existingHistory.unshift(href); // 가장 최근 항목을 배열 맨 앞에 추가
      if (existingHistory.length > MAX_HISTORY_SIZE) {
        existingHistory = existingHistory.slice(0, MAX_HISTORY_SIZE); // 최대 크기 제한
      }
    }
  
    localStorage.setItem('recentProducts', JSON.stringify(existingHistory));
  };
  
  const getRecentHistory = () => {
    return JSON.parse(localStorage.getItem('recentProducts')) || [];
  };
  

// 전체 데이터와 쿠키 리스트를 받아서, 데이터를 비교하여 보내는 함수
const filterDataByCookie = (data) => {
    // 쿠키 값과 데이터를 비교하여 필터링된 데이터 반환
    const cookieList = getRecentHistory();
    return data.filter(item => cookieList.includes(item.href));
};

export { setRecentHistory, filterDataByCookie };