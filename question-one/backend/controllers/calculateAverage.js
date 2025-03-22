export const calculateAverage = (req, res) => {
  const { numbers } = req.body;

  if (!Array.isArray(numbers) || numbers.length === 0) {
    return res
      .status(400)
      .json({ error: "Please provide a non-empty array of numbers." });
  }

  for (const num of numbers) {
    if (typeof num !== "number") {
      return res
        .status(400)
        .json({ error: "All elements in the array must be numbers." });
    }
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  const average = sum / numbers.length;

  res.json({ average });
};
