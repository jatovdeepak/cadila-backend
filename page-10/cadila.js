const fs = require('fs');

// Recursive extractor
function extractFieldValue(field) {
  if (field.type === 'string') {
    return field.valueString || '';
  } else if (field.type === 'array') {
    return (field.valueArray || []).map(extractFieldValue);
  } else if (field.type === 'object') {
    const valueObj = field.valueObject || {};
    const result = {};
    for (const [k, v] of Object.entries(valueObj)) {
      result[k] = extractFieldValue(v);
    }
    return result;
  } else {
    return field.content || '';
  }
}

// Flatten top-level fields
function extractFields(fields) {
  const result = {};
  for (const [key, field] of Object.entries(fields)) {
    result[key] = extractFieldValue(field);
  }
  return result;
}

// Load and parse the input file
const rawData = fs.readFileSync('ACILOC 300MG TABLETS # LO21076 BPR-10.pdf.json', 'utf8');
const json = JSON.parse(rawData);

// Extract and format the fields
const fields = json.analyzeResult.documents?.[0]?.fields;
const cleanData = {
  // tableName: 'ACILOC 300MG TABLETS # LO21076 BPR-1',
  fields: extractFields(fields)
};

// Output the result
console.log('✅ Extraction complete. Writing to cleaned_fields.json...');
fs.writeFileSync('cleaned_fields.json', JSON.stringify(cleanData, null, 2), 'utf8');
console.log('✅ File saved: cleaned_fields_page_5.json');
