import axios from "axios";

/* Show university statistics */

exports.getUniversityStatistics = async (req, res) => {
  try {
    let universities = await axios.get(`http://universities.hipolabs.com/search`);

    const result = await universities.data;

    let uniMap = result.reduce((sums, entry) => {
      sums[entry.name] = (sums[entry.name] || 0) + 1;
      return sums;
    }, {});

    res.json({ success: true, data: uniMap });
  } catch (err) {
    res.json({ success: false, error: err });
  }
};
