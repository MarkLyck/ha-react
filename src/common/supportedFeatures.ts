const getSupportedFeatures = (value: number, features: any) => {
  console.log('🔈 ~ value', value)
  console.log('🔈 ~ features', features)
  Object.keys(features).forEach((key, i) => {
    const bitFeature = Number(key)
    console.log(
      '✅',
      value,
      bitFeature,
      value & bitFeature,
      (value & bitFeature) === bitFeature
    )
    const result = (value & bitFeature) === bitFeature
    if (result) {
      console.log('🔈 ~ result', features[i])
    }
  })
}

export default getSupportedFeatures
