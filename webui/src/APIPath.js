const dev = 'http://192.168.1.103:8080'

export const APIPath = process.env.NODE_ENV === 'development' ? dev : '';