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

export function dateChecker(date) {
  const day = new Date(date);
  const today = new Date();

  today.setHours(0, 0, 0);

  return day.getTime() < today.getTime();
}
