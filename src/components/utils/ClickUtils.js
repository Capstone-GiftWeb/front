import axiosInstance from "../..";

export const categories = [
  { id: 0, name: "전체", img: "img/category/total.png" },
  { id: 4, name: '식품', img: "img/category/food.png" },
  { id: 5, name: '화장품/향수', img: "img/category/beauty.png" },
  { id: 1, name: '패션', img: "img/category/clothes.png" },
  { id: 2, name: '리빙', img: "img/category/living.png" },
  { id: 8, name: '건강', img: "img/category/health.png" },
  { id: 9, name: '명품 패션', img: "img/category/luxury.png" },
  { id: 7, name: '가전/디지털', img: "img/category/digital.png" },
  { id: 10, name: '꽃배달/도서', img: "img/category/plant.png" },
  { id: 6, name: '레저/스포츠', img: "img/category/sports.png" },
  { id: 3, name: '출산/유아동', img: "img/category/baby.png" },
  { id: 11, name: '반려동물', img: "img/category/pet.png" }
];

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

// 버튼을 클릭하면 해당 상품을 로컬에서 지우는 함수
const deleteRecentHistory = (href) => {
  let existingHistory = JSON.parse(localStorage.getItem('recentProducts')) || [];

  existingHistory = existingHistory.filter((element) => element !== href);
  localStorage.setItem('recentProducts', JSON.stringify(existingHistory));
}

const getRecentHistory = () => {
  return JSON.parse(localStorage.getItem('recentProducts')) || [];
};


// 전체 데이터와 로컬 스토리지 리스트를 받아서, 데이터를 비교하여 보내는 함수
const filterDataByList = (data) => {
  // 스토리지지 값과 데이터를 비교하여 필터링된 데이터 반환
  const list = getRecentHistory();
  return data.filter(item => list.includes(item.href));
};

// 클릭한 아이템의 href를 받아서 서버로 GET
const redirectPage = (href) => {
  // axiosInstance({
  //   method: "GET",
  //   url: `/${href}`,
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   data: {
  //   },
  // })
}

const setClickFavorite = (product) => {
  const href = product.href;
  product.favorite = !product.favorite; // 버튼 색 변경

  // 서버로 전송
  // axiosInstance({
  //   method: 'POST',
  //   url: '/' + href,
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   data: {
  //     href,
  //   },
  // })
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((e) => {
  //     console.log(e);
  //   });
}

export { setRecentHistory, filterDataByList, deleteRecentHistory, redirectPage, setClickFavorite };