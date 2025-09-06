function extractFieldValue(field) {
    if (!field) return null;
  
    switch (field.type) {
      case 'string':
        return field.valueString || '';
      case 'number':
        return field.valueNumber || null;
      case 'date':
        return field.valueDate || '';
      case 'array':
        return (field.valueArray || []).map(extractFieldValue);
      case 'object': {
        const valueObj = field.valueObject || {};
        const result = {};
        for (const [key, val] of Object.entries(valueObj)) {
          result[key] = extractFieldValue(val);
        }
        return result;
      }
      default:
        return field.content || null;
    }
  }
  
  // Extract cleaned fields from Azure result
  function extractCleanedData(azureResult) {
    const documents = azureResult?.analyzeResult?.documents || [];
    const cleaned = [];
  
    for (const doc of documents) {
      const item = {};
      for (const [fieldName, field] of Object.entries(doc.fields || {})) {
        item[fieldName] = extractFieldValue(field);
      }
      cleaned.push(item);
    }
  
    return cleaned;
  }
  
  module.exports = { extractCleanedData };
  