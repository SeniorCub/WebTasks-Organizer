import currencyapi from '@everapi/currencyapi-js'

const client = new currencyapi('cur_live_sg17uxxZrxJXUUoLr5Ike0jLFBGml50g55ecRVsV')

await client.latest()