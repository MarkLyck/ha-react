import { useQuery } from 'react-query'
import axios from 'axios'

console.log(
  'process.env.VITE_HOMEASSISTANT_TOKEN',
  import.meta.env.VITE_HOMEASSISTANT_TOKEN
)

export const useHistory = () =>
  useQuery('history', async () => {
    const data = await axios('http://homeassistant.local:8123/api/services', {
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${import.meta.env.VITE_HOMEASSISTANT_TOKEN}`,
      },
    })
    console.log('🔈 ~ data', data)

    return data
  })
