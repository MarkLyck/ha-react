import create from 'zustand'

let messageId = 1

const waitForMessage = (socket: any, id: number) => {
  return new Promise((resolve, reject) => {
    let messageListener: any = null
    messageListener = socket.addEventListener('message', (message: any) => {
      const data = JSON.parse(message.data)

      if (data.id === id) {
        if (data.error) {
          console.error(data.error)
          reject(data)
        } else {
          resolve(data)
        }
        socket.removeEventListener('message', messageListener)
      }
    })
  })
}

const useStore: any = create((set: any, get: any) => ({
  socket: null,
  setSocket: (socket: any) => {
    return set({ socket })
  },
  messageIds: {},
  sendSocket: (message: any) => {
    const socket = get().socket
    const messageIds = get().messageIds

    const messageUID = message.uid ? message.uid : message.type
    delete message.uid

    set({ messageIds: { ...messageIds, [messageId]: messageUID } })
    const newId = messageId++
    socket.send(JSON.stringify({ ...message, id: newId }))
    return waitForMessage(socket, newId)
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
