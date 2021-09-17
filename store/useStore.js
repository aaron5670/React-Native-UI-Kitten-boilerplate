import create from 'zustand'

const useStore = create(set => ({
  isSignedIn: false,
  login: () => set(state => ({ isSignedIn: true })),
  logout: () => set(state => ({ isSignedIn: false })),
}))

export default useStore;
