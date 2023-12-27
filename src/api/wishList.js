import { instance } from ".";

const getwishlistdetails = async (wishlistId) => {
  const response = await instance.get(`/wishlist/public/${wishlistId}`);
  return response.data;
};

export default getwishlistdetails;
