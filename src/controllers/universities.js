import axios from "axios";

/* Show all the universities 
   Show universities by name
   Show universities by country
   Show paginated results
 */

exports.getAllUniversities = async (req, res) => {
  try {
    const uniName = req.query.name;
    const uniCountry = req.query.country;
    const page = req.query.page;
    const limit = req.query.limit;

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    let universities = uniName
      ? await axios.get(
          `http://universities.hipolabs.com/search?name=${uniName}`
        )
      : uniCountry
      ? await axios.get(
          `http://universities.hipolabs.com/search?country=${uniCountry}`
        )
      : await axios.get(`http://universities.hipolabs.com/search`);

    const result =
      page || limit
        ? universities.data.slice(startIndex, endIndex)
        : universities.data;

    let uniMap = uniCountry
      ? result.map((v) => ({ url: v.domains, name: v.name }))
      : result.map((v) => ({
          url: v.domains,
          name: v.name,
          country: v.country,
        }));

    res.json({ success: true, data: uniMap });
  } catch (err) {
    res.json({ success: false, error: err });
  }
};
