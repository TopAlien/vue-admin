import service from '@/service/index.js'

export const photosList = () => service.get('https://jsonplaceholder.typicode.com/photos', { showLoading: true })
