import create from 'zustand'

let messageId = 0

const useStore: any = create((set: any, get: any) => ({
  socket: null,
  setSocket: (socket: any) => set({ socket }),
  messageIds: {},
  sendSocket: (message: any) => {
    const socket = get().socket
    const messageIds = get().messageIds

    const messageUID = message.uid ? message.uid : message.type
    delete message.uid

    set({ messageIds: { ...messageIds, [messageId]: messageUID } })
    socket.send(JSON.stringify({ ...message, id: messageId++ }))
  },
  areas: {},
  setAreas: (areas: any) => set(() => ({ areas })),
  entities: [],
  setEntities: (entities: any) => set(() => ({ entities })),
  states: {},
  setStates: (states: any) => set(() => ({ states })),
  services: [],
  setServices: (services: any) => set(() => ({ services })),
  config: {},
  setConfig: (config: any) => set(() => ({ config })),
  deviceRegistry: [],
  setDeviceRegistry: (deviceRegistry: any) => set(() => ({ deviceRegistry })),
  entityRegistry: {},
  setEntityRegistry: (entityRegistry: any) => set(() => ({ entityRegistry })),
}))

export default useStore
