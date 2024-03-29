import axiosInstance from "../..";

// 전체 랭킹 데이터 > 프론트가 받아와서 메인 페이지에 랜더링
export const getProducts = async () => {
  try {
    const response = await axiosInstance.get('/gifts');
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// 카테고리별 추천 아이템 전체 > 프론트가 전체를 받아와서 카테고리별로 mapping
export const getCategoryProducts = async () => {
  try {
    const response = await axiosInstance.get('/recommend');
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// 유저별 좋아요 아이템 전체 > 프론트가 받아와서 좋아요 페이지에 랜더링
export const getFavoriteProducts = async () => {
  try {
    const response = await axiosInstance.get('/like');
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// 검색한 아이템 전체 > 프론트가 받아와서 검색 페이지에 랜더링
export const getSearchProducts = async (query) => {
  try {
    const response = await axiosInstance.get('/gifts/search', {params : {search:query}});
    return response.data.gifts;
  } catch (error) {
    console.error(error);
    return null;
  }
}