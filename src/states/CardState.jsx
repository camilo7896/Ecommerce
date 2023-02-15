import React, { useState } from 'react'
import ProductData from '../data/products.json'

export default function CardState() {
  const [product, setProduct] = useState(ProductData)
}
