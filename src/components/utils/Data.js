import axiosInstance from "../..";

export const getProducts = async () => {
  try {
    const response = await axiosInstance.get('https://goldsergeant.github.io/testJson/');
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

// 카테고리별 추천 아이템 전체 > 프론트가 전체를 받아와서 카테고리별로 mapping
export const getCategoryProducts = async () => {
  try {
    const response = await axiosInstance.get('https://goldsergeant.github.io/testJson/recommend');
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

// 유저별 좋아요 아이템 전체 > 프론트가 받아와서 좋아요 페이지에 랜더링
export const getFavoriteProducts = async () => {
  try {
    const response = await axiosInstance.get('https://goldsergeant.github.io/testJson/favorite');
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}