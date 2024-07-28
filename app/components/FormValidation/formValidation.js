export const validateForm = formData => {
  const errors = {};

  if (!formData.f_name.trim()) {
    errors.f_name = 'Vorname ist erforderlich';
  }
  if (!formData.l_name.trim()) {
    errors.l_name = 'Nachname ist erforderlich';
  }
  if (!formData.email) {
    errors.email = 'E-Mail ist erforderlich';
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = 'E-Mail-Adresse ist ungültig';
  }
  if (!formData.message.trim()) {
    errors.message = 'Nachricht ist erforderlich';
  }

  return errors;
};
