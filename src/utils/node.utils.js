exports.replaceSpacesWithDashes = (stringToTransform => {
  return String(stringToTransform).replace(/\s+/g, '-').toLowerCase()
})