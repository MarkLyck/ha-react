import useStore from 'src/lib/useStore'

const handleEntities = (message: any) => {
  if (!message.event) return
  const key = Object.keys(message.event)[0]
  const entitiesMap = message.event[key]

  Object.keys(entitiesMap).forEach((entityId) => {
    entitiesMap[entityId] = {
      attributes: entitiesMap[entityId].a,
      context: entitiesMap[entityId].c,
      last_changed: entitiesMap[entityId].lc,
      state: entitiesMap[entityId].s,
    }
  })
  const currentEntities = useStore.getState().entities
  useStore.getState().setEntities({ ...currentEntities, ...entitiesMap })
}

const handleEvents = (message: any) => {
  const { event } = message
  if (event?.event_type === 'state_changed') {
    const currentStates = useStore.getState().states
    const entityId = event.data.entity_id
    const newStates: any = {}
    newStates[entityId] = event.data.new_state

    useStore.getState().setStates({ ...currentStates, ...newStates })
  }
}

const handleServices = (message: any) => {
  if (!message.result) return
  useStore.getState().setServices(message.result)
}
const handleStates = (message: any) => {
  if (!message.result) return
  const statesList = message.result
  const statesMap = statesList.reduce((acc: any, state: any) => {
    acc[state.entity_id] = state
    return acc
  }, {})
  useStore.getState().setStates(statesMap)
}

const handleConfig = (message: any) => {
  if (!message.result) return
  useStore.getState().setConfig(message.result)
}
const handleDeviceRegistry = (message: any) => {
  if (!message.result) return

  const deviceRegistry = message.result.reduce((acc: any, device: any) => {
    acc[device.id] = device
    return acc
  }, {})

  useStore.getState().setDeviceRegistry(deviceRegistry)
}
const handleEntityRegistry = (message: any) => {
  if (!message.result) return

  const entityRegistry = message.result.reduce((acc: any, entity: any) => {
    acc[entity.entity_id] = entity
    return acc
  }, {})

  useStore.getState().setEntityRegistry(entityRegistry)
}

const handleAreas = (message: any) => {
  if (!message.result) return
  const areasMap = message.result.reduce((acc: any, area: any) => {
    acc[area.area_id] = area
    return acc
  }, {})
  useStore.getState().setAreas(areasMap)
}
const handleAreaSearch = (message: any) => {
  if (!message.result) return
  const messageIds = useStore.getState().messageIds
  const areaId = messageIds[message.id].split('search_area_')[1]
  const areas = useStore.getState().areas

  areas[areaId].entities = message.result.entity

  useStore.getState().setAreas(areas)
}

let messageId = 0

// const messageIds: any = {}

async function connectManual() {
  const socket = new WebSocket('ws://homeassistant.local:8123/api/websocket')
  useStore.getState().setSocket(socket)

  const sendSocket = useStore.getState().sendSocket

  const onAuth = () => {
    sendSocket({ type: 'subscribe_entities' })
    sendSocket({ type: 'get_services' })
    sendSocket({ type: 'get_states' })
    sendSocket({ type: 'get_config' })
    sendSocket({ type: 'config/area_registry/list' })
    sendSocket({ type: 'config/device_registry/list' })
    sendSocket({ type: 'config/entity_registry/list' })
    sendSocket({ type: 'subscribe_events' })
  }

  socket.onerror = (error) => {
    console.error('🛑 WebSocket Error: ', error)
  }
  socket.onopen = () => {
    socket.send(
      JSON.stringify({
        type: 'auth',
        // @ts-ignore
        access_token: import.meta.env.VITE_HOMEASSISTANT_TOKEN,
      })
    )
  }
  socket.onmessage = (event) => {
    const messageIds = useStore.getState().messageIds
    const message = JSON.parse(event.data)
    if (message.type === 'auth_ok') onAuth()

    if (messageIds[message.id] === 'subscribe_entities') handleEntities(message)
    if (messageIds[message.id] === 'get_services') handleServices(message)
    if (messageIds[message.id] === 'get_states') handleStates(message)
    if (messageIds[message.id] === 'get_config') handleConfig(message)
    if (messageIds[message.id] === 'subscribe_events') handleEvents(message)
    if (messageIds[message.id] === 'config/area_registry/list') {
      if (message.result) {
        handleAreas(message)
        message.result.forEach((area: any) => {
          sendSocket({
            type: 'search/related',
            item_type: 'area',
            item_id: area.area_id,
            uid: `search_area_${area.area_id}`,
          })
        })
      }
    }

    if (messageIds[message.id] === 'config/device_registry/list')
      handleDeviceRegistry(message)
    if (messageIds[message.id] === 'config/entity_registry/list')
      handleEntityRegistry(message)
    if (messageIds[message.id]?.includes('search_area_'))
      handleAreaSearch(message)
  }
}

connectManual()
