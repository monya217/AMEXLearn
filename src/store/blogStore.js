import create from 'zustand';

const useBlogStore = create((set) => ({
  blogs: [],
  addBlog: (blog) => set((state) => ({ blogs: [...state.blogs, blog] })),
  deleteBlog: (blogId) => set((state) => ({
    blogs: state.blogs.filter((blog) => blog.id !== blogId),
  })),
  setBlogs: (blogs) => set({ blogs }),
}));

export default useBlogStore;
