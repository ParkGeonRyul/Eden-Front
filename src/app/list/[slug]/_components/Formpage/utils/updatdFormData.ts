const updateFormData = <T>(
  fieldName: keyof T,
  value: T[keyof T],
  setData: React.Dispatch<React.SetStateAction<T>>,
): void => {
  setData((prevData) => ({
    ...prevData,
    [fieldName]: value,
  }));
};

export default updateFormData;
