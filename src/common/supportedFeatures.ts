const getSupportedFeatures = (value: number, features: any) => {
  const supportedFeatures: string[] = []
  Object.keys(features).forEach((key, i) => {
    const bitFeature = Number(key)
    const result = (value & bitFeature) === bitFeature
    if (result) {
      supportedFeatures.push(features[key])
    }
  })

  return supportedFeatures
}

export default getSupportedFeatures
