import { useQuery } from 'react-query'
import axios from 'axios'

export const useServices = () =>
  useQuery('services', async () => {
    const data = await axios('http://homeassistant.local:8123/api/services', {
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${import.meta.env.VITE_HOMEASSISTANT_TOKEN}`,
      },
    })

    return data
  })
