import { create } from "zustand";
import axios from "axios";

const useUserStore = create((set) => ({
  data: [],
  authors: async () => {
    const { data } = await axios.get("http://34.143.212.163:3000/api/author");
    set({ data });
    return data;
  },
  userDetail: async (id) => {
    const { data } = await axios.get(`http://34.143.212.163:3000/api/author/${id}`);
    set((state) => ({ data: state.data.filter((user) => user.id === id) }));
    return data;
  },
  addAuthor: async (payload) => {
    const { data } = await axios.post("http://34.143.212.163:3000/api/author", payload);
    set((state) => ({ data: [...state.data, payload] }));
    return data;
  },
  updateUser: async (userId, updatedUserData) => {
    const { data } = await axios.patch(`http://34.143.212.163:3000/api/author/${userId}`, updatedUserData);
    set((state) => ({ data: state.data.map((user) => (user.id === userId ? { ...user, ...updatedUserData } : user)) }));
    return data;
  },
  deleteUser: async (userId) => {
    const { data } = await axios.delete(`http://34.143.212.163:3000/api/author/${userId}`);
    set((state) => ({ data: state.data.filter((user) => user.id !== userId) }));
    return data;
  },
}));

const useBookStore = create((set) => ({
  books: [],
  addBook: (book) => set((state) => ({ books: [...state.books, book] })),
  updateBook: (bookId, updatedBookData) => set((state) => ({ books: state.books.map((book) => (book.id === bookId ? { ...book, ...updatedBookData } : book)) })),
  deleteBook: (bookId) => set((state) => ({ books: state.books.filter((book) => book.id !== bookId) })),
  fetchBooks: async () => {
    try {
      const response = await fetch("http://34.143.212.163:3000/api/books");
      const data = await response.json();
      set({ books: data });
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  },
}));

export { useUserStore, useBookStore };
