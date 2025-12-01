import axios from 'axios'

const API_URL = 'https://api.abouoways.ma'

export const getProducts = async () => {
  try {
    const response = await axios.get(API_URL + '/api/products?populate=*')
    return response.data.data.map(item => ({
      id: item.id,
      name: item.attributes.name,
      description: item.attributes.description,
      price: item.attributes.price,
      oldPrice: item.attributes.oldPrice,
      category: item.attributes.categories?.data?.[0]?.attributes?.name || '',
      image: item.attributes.images?.data?.[0]?.attributes?.url
        ? API_URL + item.attributes.images.data[0].attributes.url
        : null,
      inStock: item.attributes.stock > 0,
      stock: item.attributes.stock,
      featured: item.attributes.featured,
      sizes: ['S', 'M', 'L', 'XL'],
      colors: ['أحمر', 'أزرق', 'أخضر']
    }))
  } catch (error) {
    console.error('Error fetching products:', error)
    return []
  }
}

export const getCategories = async () => {
  try {
    const response = await axios.get(API_URL + '/api/categories?populate=*')
    return response.data.data.map(item => ({
      id: item.id,
      name: item.attributes.name,
      slug: item.attributes.slug,
      image: item.attributes.image?.data?.attributes?.url
        ? API_URL + item.attributes.image.data.attributes.url
        : null
    }))
  } catch (error) {
    console.error('Error fetching categories:', error)
    return []
  }
}
