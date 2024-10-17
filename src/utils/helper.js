export function validateStep(fieldObj) {
  const missingFields = [];

  for (const x in fieldObj) {
    if (!fieldObj[x]) {
      missingFields.push(x);
    }
  }

  if (missingFields.length) {
    return {
      isValid: false,
      message: `The following fields are missing: ${missingFields.join(", ")}`,
    };
  }

  return { isValid: true };
}
